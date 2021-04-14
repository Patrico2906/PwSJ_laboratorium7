var portfolioApp = angular.module('portfolioApp',[]);

portfolioApp.controller('GalleryListCtrl', function($scope)
{
    $scope.galleries = 
    [
        
        { 'title':'Windows98',
        'when':' 1998r.',
        'thumbnailUrl':'98.jpg'
        },
        { 'title':'WindowsXP',
        'when':' 2001r.',
        'thumbnailUrl':'xp.jpg'
        },
		{ 'title':'WindowsVista',
        'when':' 2006r.',
        'thumbnailUrl':'wv.jpg'
        },
        { 'title':'Windows7',
        'when':' 2009r.',
        'thumbnailUrl':'w7.jpg'
        },
        { 'title':'Windows8',
        'when':'2012r.',
        'thumbnailUrl':'w8.jpg'
        },
		
        { 'title':'Windows10',
        'when':'2015r.',
        'thumbnailUrl':'w10.jpg'
        }
		
    ];

   $scope.sortList = 
    [
        {
            'label':'Alfabetycznie',
            'value':'title'
        },
        {
            'label':'Chronologicznie',
            'value':'when'
        },
        {
            'label':'Od Najnowszych',
            'value':'-when'
        },
    ];
    
});
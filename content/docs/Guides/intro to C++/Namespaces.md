---
sys:
  pageId: "2801882c-8e23-4625-934c-582fcd6070ec"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-06-27T13:36:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Namespaces.md"
title: "Namespaces"
date: "2024-06-27T13:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
toc: false
icon: ""
---

Say you and your partner are working on a project and you each have your own folder of classes. Then when you try to put all your code together for a test you find that some of your class names are the same.

This often happens when working with big project/libraries 

### Solution:

```c++
namespace yourname {
	...
}
```

## EX:

		your code

		```c++
		namespace AnthonyCode{
			class Pilk{
				...
			};
		}
		```

		some one else's code

		```c++
		namespace BingusCode{
			class Pilk{
				...
			};
		}
		```

```c++
int main(){
	AnthonyCode::Pilk p; // using your class
	BingusCode::Pilk p;  // using your friends class
}
```

### Think of namespaces as if you have manually added to the front of you class name

		your code

		```c++
		class AnthonyCode_Pilk{
			...
		};
		
		```

		some one else's code

		```c++
		class BingusCode_Pilk{
			...
		};
		
		```

```c++
int main(){
	AnthonyCode_Pilk p; // using your class
	BingusCode_Pilk p;  // using your friends class
}
```

Note:

	Anything inside the `namespace` brackets now needs to have the prepended name before it.

	This can be anything from variables, functions, classes, etc…

	Just think of the stuff inside a namespace always needing the `name::` prepended.

Other ways of using namespaces

```c++
namespace AnthonyCode{
	class Pilk{
		...
	};
}
```

```c++
namespace AnthonyCode{
	int main(){
		Pilk p(); // Note you dont need the AnthonyCode:: anymore
	}
}
```

## OR

```c++
using namespace AnthonyCode; // Note: you don't need the wrapping brackets

int main(){
	Pilk p(); // Note you dont need the AnthonyCode:: anymore
}

```

Note

	name spaces are a thing in other languages like python or java

	they generally just get automatically created whenever you make a file or folder

	The `using namespace pakage` syntax is like python’s `from package import ...` syntax

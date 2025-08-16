---
sys:
  pageId: "2801882c-8e23-4625-934c-582fcd6070ec"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-12T15:57:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Namespaces.md"
title: "Namespaces"
date: "2024-07-12T15:57:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 115
toc: false
icon: ""
---

Say you and your partner are working on a project and you each have your folder of classes. Then when you try to put all your code together for a test you find that some of your class names are the same.

This often happens when working with big projects/libraries 

### Solution:

```cpp
namespace yourname {
	...
}
```

## EX:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

your code

```cpp
namespace AnthonyCode{
	class Pilk{
		...
	};
}
```

</div>
<div>

someone else's code

```cpp
namespace BingusCode{
	class Pilk{
		...
	};
}
```

</div>
</div>

```cpp
int main(){
	AnthonyCode::Pilk p; // using your class
	BingusCode::Pilk p;  // using your friends class
}
```

### Think of namespaces as if you have manually added to the front of your class name

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

your code

```cpp
class AnthonyCode_Pilk{
	...
};

```

</div>
<div>

someone else's code

```cpp
class BingusCode_Pilk{
	...
};

```

</div>
</div>

```cpp
int main(){
	AnthonyCode_Pilk p; // using your class
	BingusCode_Pilk p;  // using your friends class
}
```

<details>
  <summary>{{< markdownify >}}Note:{{< /markdownify >}}</summary>
  
Anything inside the `namespace` brackets now needs to have the prepended name before it.

This can be anything from variables, functions, classes, etc…

Just think of the stuff inside a namespace always needing the `name::` prepended.

</details>



Other ways of using namespaces

```cpp
namespace AnthonyCode{
	class Pilk{
		...
	};
}
```

```cpp
namespace AnthonyCode{
	int main(){
		Pilk p(); // Note you don't need the AnthonyCode:: anymore
	}
}
```

## OR

```cpp
using namespace AnthonyCode;

int main(){
	Pilk p(); // Note you don't need the AnthonyCode:: anymore
}

```

<details>
  <summary>{{< markdownify >}}Note{{< /markdownify >}}</summary>
  
name spaces are a thing in other languages like python or java

they generally just get automatically created whenever you make a file or folder

The `using namespace pakage` syntax is like python’s `from package import ...` syntax

</details>



```powershell
TODO: make 2 name spaces example
```

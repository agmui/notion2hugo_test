---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

</details>



`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634JZDQDQ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDEW39kjF8sjm3A3yBQyin6%2BAYXo103ihWn7bzOMcBRIQIhAJ4TJcDcJfPWhD%2BuxROASNESuDArz6X%2BIpfRoE1flrIkKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA9KHFmeSxAG%2BuF%2Bkq3AMOdS%2BEVJvdmORGm3oPtDgrPwQAIgZqs7fSpt0QMXBg%2BZN1Q%2F%2B%2B7IpjGajYqIlYOqeFmY3R7hk9OTrU494i8xgYBAQgCFvUKFYPHRHceBkHtOewUiKO%2BzdN8bmYw0uavzZTHWabMrhQg6qO6SbgPglIyuZpJ1LKnD3LFGJiTkE30fp1Y3FIPpQjaW32tWIby1GEXZHrXMm3h03iw5WtoFbgeTk8OVoZRD0rZbCNK6Dd0EW%2FnhbMLcQqYU9%2FPkhsgNiOSfTcXGwWH8i6YMf97Rpc9qhfswWCUIZ70i3n3BDWv9t6DP9bnXVlyk1gIvWU4p%2FoNSySXz4jVrni83Ln1n0K2BtLQd2Nsz4YOR8npfWQpEr7WWVUjSW3MSKrdbdYXunmgBhbLKuK7L5A439LlJKa4ayi1i6PmkBYlEVc5Jbtw7Xs%2BrU243RgM%2BNDUC9OdRNaDV5NSZvDIGV%2BGrnfijkQ5%2B7rEW2gbk%2F2lusJOFFRJi025EQW96lE%2Ba7b0rjWs4cOuQ5%2Frwp9uX%2BLJDsZsh1sU1gqtwiYOHXeYG6OW3Cr%2BriSY1lObCiM0%2BhXpmKZWcOJIDcH2xdfb0FWAf9eQVOCzuPWWb%2FD6m8ipBmDNol%2B0o9RFVQh%2FuK2W%2Bkq4TDu64nFBjqkAY8Cm4gNhw6zyfwmzQxZXrB6D37IY%2BFM2PhMcpmCIeCJC2Ca%2F3uh%2FtIUOx7ZSurv2jOC%2FPVPy%2FTL61IKIBT6f3w17plZsUiYfaaB92LBBDwZr%2FaxwpSNExodNKxf0h1ETMbhdi4IAXqq2bLFZ4O7WmO12wm8hE11I0EZyzhjA2RFGiainNhvrLmtZgSRvR2uidnzpeed9ArfAYVmNFoIngHIgsLO&X-Amz-Signature=423de5c59f416c55bbe039a609d05c4e93da128895afe6e8c91b8f8c17251e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

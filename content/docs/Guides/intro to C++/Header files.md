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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFJKSLG%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDm1Q31OvcqjK316e8KNjSOpdgkI8FSgu4cl3niPKJwVAIgQm9MQcW%2FII64dSL8OCREpWbdZynE65JNKHVLnm97mg8q%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDLLJUr0iobLHeExfCCrcA4oHJlLC3skLMLU4X0%2BtXJq717HM5dbE%2B%2BGCY9VR5ewHeiwZbJLvENwg%2F%2F9aFg7MyXsANKms4%2Bik%2FHc%2FLjWJZDMLcHGPIXRGvEh8hnTlyQ4tpHZc0iDZPGzgjSbam9tEIC78pWm89NcJz1zxAuFvtGMvINMPQdpOA0%2F02fXeI1zLbseM6hZEPCATlHdGp9V8n3KNPx7j3C4wESb5toBvB8Vfqa76WzmmDZKbmNKGELVunssV1OqOc1PE8%2Bnv0OOXt9a3JgEuwboZl%2Bqv8NVtPaDErub%2Bs2KM9AnNJust79XgTzPTMdcKGW480YmkLO8%2FsSLbHKmOB2fMxs8j9P4L4fsUIZa3CNZtKjjcAVHMvRKJlsbye5t1lB0FOznbKg0aeMGmy13lctckSo0eyUSNrcAjyNl%2FQgrpzWkTzlYzz1QbwkBUREqxqpJWUyi0towCJXWmDl1D7Mo8zy29EQWsXmjALs2RmTcmP%2FI3H6L4Znh8j3TP6WeJtxrz2PPtUT7yMxksyAj0CDPHeuLl0tZIjF6WPqlNyXV1OY6T7JIJ6mgyATLogfUNl8AWSE74xoDGvz3Lnvra97kFm397YV4UR8HN9xUURkFDBWZSaV5%2B1y8V138shgx0wP2fflxYMN%2FeuMkGOqUBsaSxGfLsHmYSYClQbfa5SaU7M7XnfqfEV7teM3y6LOGq1jOiJ5lX%2FEBu6Ms6XElp55SmkhsekkBNYlQ88jxy%2FHbQxZku1qBtXKIDdKwTHMWxLlxTf%2B6psBY326GP5tCWKtnyOXpJ1oQvrOjBWoKaKXysYlNYDvlj%2FyA8DhGLMU3EDXrOh%2BsQqoM6%2BJ2wRFbMUwGVyYSxicd%2B8patA3RhxrQIHO0p&X-Amz-Signature=e607acf94cf9485dd9a74e62287bf346f111758499fa5ea362f708680cb0e719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

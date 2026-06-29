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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOZ5XMX%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUqXWAhKpWsNLUzhIsnrz%2FdZM5lLQZ4leZsuNCyLv%2FsAIgH%2Fo9zXfppAA%2BA8C%2Bl2ZP5hew8xrlZUFALFL1k6mOaQMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHSwrOK00k%2FujkHayrcA86DluMbucxC6yz0z3HjDTTr2I%2BJQ4WqgJ6ohJjs1N81KZ2pWFGX0%2FQtiIjO91nc4jczSFklOAEqpjax5%2F65lBNfgDZSB4%2BqF9kTi67BMPc9QFz%2F6vKmCsL%2BzyQ085YgH6B1eQByrK7Xuvz4TKwxuecmI6ua2HC2x58ZeuMYwIw7hGj8RSG%2Bysv453btGPcbVk%2FW7NjHkCoR3pM%2FZ%2F9lDECEgibAfcOXr8ue4ax3dI51eg6NfandnWItvPtVIP6QChntpDCiXNmFoNB7oLEJeCXP9WMF1rneEwJkAbsyXB7iNn7JkQ02%2BW7Rna3OzF7%2BavaitXn6yr7i8lAQRJ8gybpyCRX5KxWiISAEYjax8LC4OxJWWuzIEb24su%2BOzEdlE6HhI5y8ZoCFmr5EfxRZi1xtjBdOyXR%2Fr15hXmQTjprnwBeBObXZ3fUaBryfJtqZmcc9manHOCED0%2BlkJBC1DEqL%2B7Y8mShQ4vDDaLour2h4l3ROmrHCQP9rTzCkB%2Fu5OFCStETAoU9h6RggRNtmsBsz7augOBTlUPRoJX36aMz%2BQr0m0ov%2BrT2NYBEPaUhoWIepIJH32zqPYNT5JMv8l8ykUUdKT9Ba83cAyvWIa83OnLv0WGKgGUtnO1lhML7Vh9IGOqUB8PHIXlknhcXUZ1f%2FF87VX8nPf6R9NXhuDExmFsa54bffFFfur7b%2F6qy5fJLgwSaBIgQ3pUhIm%2FQsuDoDRzV7I3kfygw%2B7m3NgwGdKMQWgYSiYGC3nkoQBw4agPbnj7Ccmx5annyNeVBMWtWps%2BeeGysnDq5N6rfqUc9GdzOnCX%2BBxl2jfhgSw1IP1NLHtwC7avUHfKzL2gVGWnQz79ZeuQ%2FN4%2FMJ&X-Amz-Signature=9eb1bf1cca8827b4f963f9628851417b87899be53b9e837773186924661afe0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

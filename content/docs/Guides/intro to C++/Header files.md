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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOA7IXIR%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCDxkctLHtjbYAsojSk6RXp%2BvZXmNjeYCcjs%2F3zE%2FKUAIhAPukR%2BtVqvL20HKqjUoeqB%2BIbqG2LyDR%2B4gvVHyDe3h%2FKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtP%2FLxQt64rTBWEjkq3AME9w67S2OhoMxL%2B6bryG2OGKxcRL1joTL6buvsI2%2FIknNmlP1ODXBYoBnrtkMWBZVv64ntiusU%2BPgV9Ab2ezsOYymNTIqtew6KMpqiRee2hbXZwRDnRLOzd0Ma2Cz2O43Ff3mWbOHnFh7nBVbFMv7%2BjftFkpHIAuzEFKV6PBT9E%2BdN8Z39bQqadCCiL8SDN%2FKDf0EI%2BzYM5PpqB47Q2yanBxdnq7V83syLbiOn8MpbhPOlArr%2F7vs3MQd0Zn61h8XZeqHZKKKZye3KLc65CKjTWmAO4sBAZYE2Exu61OwY%2BSPx%2BQiQGTERyQ%2F77NMJDwS1AOUDEp3c8bJ7uZhJR3TfNzVI5gupP%2FYGVp3G93emEsYYhHGCUplus7mPosk%2BiCAMVzcffXJkcGxsB6w3g1fo3bLLcEA4%2FXuxJt3kcO2GHI1AXkvGLEjy4GQt%2BBPL78TzRdiCOtRM%2FjGZ0yT0eEg3ubkxGwLcym8P4TM6XH5Xzyt35ojp%2B2sth6P7gRkyqt3J5%2FKrNLfFUs%2FbLSvn0ah99ooJbvetmGmuBFvXkUPcEzCM%2B4sOnSkcym7L%2BoMsToC400iLLoX8JrUO4PChZsJ94xcfwRcoiBkxLebm4Cz%2BhUexRjI3yF%2FemEndqTDm8fnLBjqkAT%2BjeWqFMISsog7r4T9LH8AIdBpqAY3RAV3yo5sC2zfgonY3rNGGf%2BDwkMPaRBtEBY2Z3zIPDzAAlsQkjLZwAHrL%2FCfXpEzABgSca4u29sF4fZSsu7SyrDN8jefhdft%2BXe6eIDo7H84tdU8cAi4S1hQrw%2FgXIb%2B%2Bpn7aT%2FYkvZjCjzaM0DDJ24gPpeX6%2Bcp2oAhho0vBIzF5oEu0APoO1dDjpv1%2B&X-Amz-Signature=737d6bc6a2fb29921f39b336f7fad2edcc19060a4432718582038d747a185bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

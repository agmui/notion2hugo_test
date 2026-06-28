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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVGXV4YM%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCjspKid88kLB%2Fg6YvhKul6TOcNbwbE30GP9EuNusqfgIhALSrsO4XavDEROtkwShHW4%2BzMd9DkqsWXm%2BOKDwCrj4EKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwuZEKXHncd5JcV00q3AP3k1ex62mitEigI249HjIXTgvBAj%2BV3GY44kFP2r68pnvB47J%2FCX%2FptYZhH%2FpAarYRruz2zuP7ZrcZUdH6ApOunsq8hXhcRSvYWYeIENw76dRGkamva%2F%2F%2Be74oEE2NB3J7batUd1CP2cKsDgEvqI6fYkbgjaZS4qBIedPWK69XQ0lzwU7%2BM2rsZmht6tjlf7x5X4qytfr9yjJvPHzeUDsKWnGD1p5x9GX3wcKqKUBGacA4HJ%2F1hq0vtT0lGg1bTIa6PCDdRIk4orUXolN3%2FZGWQUs9Jk8w4yWq3jWXJKd5XyuxJ5JMieqqqx6NjzLng2DXg7qCgmmjzedyg9w10zOHicVp8X9Mj63zY7ZJbRfcYojJbEtWEbSnEtMxgkQAEDCzturGt4CRDGjLKtd3UpiaGV8HmKMGl75KoFPqrsY2MG3uiPzprpbJAS4kLN12CDVSZk4Gn0IkLMrDcP3Fsak9pS7VI9tlORay%2Fi96sDTJZzwJ629w%2FCMG3YdGPUI5RZ7sHtBBpgMnVu%2FENBs2pvwjqVKSMB%2BzRcRlYHsT8n3t9LHwgRw3eOzN9lqio8XcShlimnCm5HH7zbukgG3oP7YRMts8YVm0VFfPraipwauv4ElkKblOI8oHsaCk6zDUnoLSBjqkASVhdJ1SiYhae4MzfQo4zpdnqoZzoNu2PebCYuMi1Jx129LwkxN1QIy1RLQCYI7T%2F1Nh00J%2B%2FLI6kAxpY59e%2FlZoHFYO%2FhTCT2k0SbbAPATVummcjtXHh8fjLLDyzGDkbDpyiJtE9gwmh4E2FWjKB29bpcA1EwNkeBL8vXQRUs17lVTlEcz5iu%2B78JXc9b%2F5e41R%2BAGfsNPqSIjaeCUZS3JkOWc5&X-Amz-Signature=95a5bf90f50af7eb9ebc8154e3184e76531943168383ca498f6c96e9605fa5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

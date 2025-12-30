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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664675Q65Q%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbbiE3OcZQxgqz4xn6X9Q84XqjarovnPJibCzMUSXdaQIhALnCBjlH%2B8dSvmOMzXOzdaiJAL62csVtn%2BlAVVx4LCvaKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrz%2BiHo9cdjHe0%2BSYq3AN1vW%2BuEdGgod3gQDqEzN1qVwfbKBbddtkkFolnakeD194%2BpLigceaWtsvmymtf63i4d9%2FXztSFHp0PcVNQ0omwp58zmdD9FcJGy3U7jVDED1w5r0ecYfIsUW9FF6Kzer1dbuz9%2F6ULwSPCH8qqM3L6WyP6mMNF1ZFSoaLnE3WC4oIPx1YumdpzACDlPpjF5lS3Dt8HBf1rVR3Sw1wIePEnLAfHyZn5goVxZInCHECDJuy%2BrOTXNGTJqhkCyO00kuOhpl9Hn%2BHxWEOGr9Nv2gFvgLeSHbmG7%2Fn4QPooApY2FVKvie3BNW5ezEQkc9U19L7zJZov2O8UgJkYAhiRkXOBgL4p2XT1VQDLjrkBfFMXOojUrNNuUWL4VWsW%2BO6uxsdL%2FSL%2BNXXh07zJyQFIiGqgAzFAkK3qzmwahdLJZnq5I1hjUvJr1FmB300GidrDrmYoq1zwueOvhUffmdvRknJkl14l%2FrjReprzJx27x2g9FAHgptm1RhhdT19pyovBvYxU7ffnFu4jJZBufwsRLPtQNKo1yjlmf7qkx5PFvPOOuaTWFuPN5Vyx1hTHxa%2BHg9P2DUzxPFSad3yiDo4z6M9lg1sc9s72cSsAMFbuD%2FlcFjVslm7e2sfNsdQ%2B4TDSusvKBjqkAcJTz2Tk1zrqD8SKlZIRY0ZsMp3TO3bVGqNXJJtZEVgivTe11ADuci49bP%2BYjwUjjAvbiPM0wCkab5PW8toljlHnv%2BgIy6IvB%2BYnAnlZfOoustUoW%2FQPOPmndlYpkiILDVJ0OPXCj8h%2Bi3udPF0hiuJTvif0bgTduuOfRA9nz7nRTWYvSFQFVeGL6mVQY%2F%2B%2FxlONDkNjG4TxJoWy1r%2BkvqQtjfvQ&X-Amz-Signature=d3d301432fbfcff5b923e47becebe0cd58d6477520b8392ef27f6f4927bf6ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

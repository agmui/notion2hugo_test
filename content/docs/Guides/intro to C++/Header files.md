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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPWGDUS2%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdnESUmNb0Hfk%2Bq5j9%2BCLUelJAXr4MrWNO6%2B7p%2B02auAiA3qpqjTggoKskMcC9NE1SiF%2FrG5TJqgiUYU6y9P1qwBCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Tb9lgfws3VXCh%2FDKtwDgmGmWCbuspKgpqdnCV%2BH64qhZtO2K5ThBbLY1UMhkHUTfTgnCiHRCs73pxVSy3pHwNQ1xAJyW1%2F71O0rzrYFYja792o4IIdiAYhVq7mxZhsBJ%2FYOeathXX9mADydIPJHl5JS7AhVfE3o2y6d%2Bf%2BqONsf47%2Fm1OtD0%2FB0OuR3CRLB39mHDBLBrQ5QetepUQ%2F%2FOykuvoUfw%2BO22Gge7eFRM8LRxu1b4%2FX6S9ujwF%2FjupTZhncnLIqNT%2B%2Ba%2B9SElJowsp0ZpIHXylV8VdcMihFZSzZNMi8eG9%2Ftp2VQ9U7iNUDQDJWboKb1wtdVhA0rmBiELKdGcH41Gk6mgFQpCbBAo%2Bcz8a6sDXb2L5rSTXGoHHdbQ1gPqewTHi8h5SVCuC1wWkh%2Bn85rTwXIYmJ95jTbeDCjBKXNhSdItEx6ygzzP8Zhzq%2Fv4N3vQKcpWh1jyZBVhtcI1%2FvKF87Kgsi5hjaPefZ3ZZdTPduARoZ0ubDAfMoyb8z4doACruE1z4wkxFW%2BBaQEumxUQf%2FhDeXOuRZ%2FYV7gDeYGj3tURsbTTeFZZ6MUjcf1M1hMsKRa2atphuvYCtmPVRaixPejMs4Oirl5QePREjryp5usfJgu9dZt2Ovc3VoprOZrXFdjHlEwoJaMxwY6pgGR2QxST68oVMOkx9j3eBuIef%2FHO8C1BR%2FYoHxYyy2F2%2BzGjKMHtzpui1LzGLz0LI%2FNOoq4BgZ9NIgl6Io8anc3lpZ9tUmZjORbxwhHAzaPQbg8cLqzMDi3gOHZkJIfpB2TY8SxfZowTPSLBJ78B3ScLSo9Ppq5TQ9pIvBi6QiwBlJOtG7EYmpyb7E6xZ%2BAxcfVVN6hg8tPWHFBk1FpRe8ISQiAvqt8&X-Amz-Signature=aa72d7616a46830a192aa314f0d12bb7a9e9026c7e435cc6caec6d0e0032fffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

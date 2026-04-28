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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDLFUATT%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDPZK4EL4lozOAL3Ob62V3qrjbvs6SxypiuO8ENfp5oDwIgbmeXn2zKMvfeAzZ7Yza1NU%2BQPVhSvSbG4qTL8HUj56gqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHL1Wbcb4EJHV6DfircA7MguKJD24uBJR6C5YsywJERN77Ruj253vU3YK%2FQGhk9ZLDF%2Fhr%2BNjsF4wD59kK28Yxaa0I7RooeYbrryPqeNHi6kq7fkYjVRpJLHmVgtI8KGxD71dM6kAGXE3DuEfs%2FLF99YPelBQAabxJyapvvViYu9B7EkWQ4VG4yvzAT%2BhBwfFL2ocMwVMHSGKnDcFN31rlcSJ8wpEKt4JQ5i%2BmDabjh9uB6wg0rqnhQRHqC0arBfmSvhVCqHNwShxVkNIuRFm9Ubk1rjT0FTC3HFn5s1ONp%2FCBrXSw1UZq%2F5ifvBrWuTSO6uj3%2BiqNHWN10%2F%2F31hcfVJpRgr2hVtmfuhcgednhwPAMBaqPp68Jy8AQHVA8VP9mT6XkMfdKkClMPITMqvwIDYxJVGPPQxAUUXx0owr1Wl4sMh24M9jG5164LQzN3ncI6P1hWDioTEHqyx2vKUXvRIjBSqfZlue6Crn1VGfabZTWLsYrfM9wMm%2FNOhsIPaSRRs206HFGssOwtOnHQvcxgxiFw3y240cXJdQ3m6roQNwA%2BQWCg%2B5M1%2FwfUL5%2Bo0VpBzDsaQXW%2BwHhONSyagpIs5F6VJPx0i4PGekPsdrVz5U3o%2F7pYYa0y0qzMbSRN%2BaUtycQL2dNUpvLGMPGiwM8GOqUByYctBrSaeMENhDQm1mjzw45FBe%2Fm6kIwsJNAdT3Y%2FFwye2mLjYFIHDHbW1UVjEv116XIQ2khGzPiQzv7myR0PUd9QvHBT55%2BknjJHfW3rh0THB6krBVcWxJll85dA0Z7B2MbxeXrSMsUJVZhe0LjfEPUvClnPtXZDZKlt7IWzJ0oGgCHQm1EWAVG6Np%2FK4%2FwEDACa0n79VgdEsfFerDRk5MhGCTR&X-Amz-Signature=50c9ba3b17e9d5616f463538818c41b43ad39c78a770f4aa12751e009d7a218a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

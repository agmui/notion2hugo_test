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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCDVTOAE%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCICgqj1FzxnuJxfIpT2sR3p7Phxk5KGzXPc44oAqAk1S2AiBHGv7V0K3FH8DbSxBrIuozRs3zq3XrvgZwcC6yEh5%2FfCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMvDe1Zd8jCsRzn09EKtwDv2B1O5S6c6rtvYrNM8WlsDOL1zFd81npliWamb8ZdxjLjP%2FkcD3smTXsH4FbLRDFAfVUMBALifmSjnd4EwrXcgbrchD8OH%2F3cZeK4wP0u0AxEMCtKNmNFadYMt5GcWnXBum0EkJlxPoJbEDWMR41kGhISWS%2BtuLvVhlP5gWcuHCDBN8U%2BYoGDTbPXrCeONVhuqLFUX2n9U3lGZ503wcAAsNaKiUcg6zl0N%2Fi1oCtt%2FO7J6zpUOx9NUJWlLJhrpV%2Fc6qr7Yz2fHV%2BPsaIuX5ehPkzPv3UpXWV3XZNIiqCotYJRLpM0yx1uyv%2BjstOAbnQYsU98oJI2r7motWBWvVRxUHjuSO4nPPMpK2J1PE9c3MnpoJWYmtB5Nwf0N2mjZIDtOAAXUFFOjnBVhaCvp3uks8kdKKpsGjCLoAwiaeulehprKcfL%2BkEl8Fg%2FFACG0ZbK5XeeJVTN2NDDS0T3j6iY3MQH%2Fokg%2BMbYM1%2FwLOcvrO5%2B8trl1X4yZyQWzuDRmSP2G%2F%2B8C8PjjqbviAD%2FjgkYFCv2yAqp5ZQjbgxRUExYdmJ1NT%2FlLvX084Et2gGtoFTOnd4CgycpSlnjSrerk2xGmPH8cv%2FKonn1Xynr2Z6u9AAH97%2F24wT4R7RgO4wktmDzQY6pgHATh4LyLv%2FVFs2XpuJaLKRR6IV5I%2BOzIYJmXdNtMliKpHuAHam0wm9bIKerO0kPPsNUp6Qf0A4XfdtoEp%2BRV5eQbtQClgQJjC0Y0dYfxaT5lIerg2EjKqnWjCq34i7p%2F9zzmGkYbuCo3U31hxKvb7wbeGujwVGxhwEJ7IXGGeZaMpL60nKkyyE5GOfnUwG%2B0NJPRO5bfyhxbmbCma8ROT5YczP7Bhh&X-Amz-Signature=21358c788fc9ab479b2a102b184415ebf28d41121511496b143eb94ea675feed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

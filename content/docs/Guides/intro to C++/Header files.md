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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGHV7XG3%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCrE8ACFQoAZXVzOEC2Bfrhb8oedsb7AH796e%2BSAyUNrgIhAIDIAZ%2F563LBK%2FLwN4RD7IQGoK4zwTVz%2FRZwT8Ld47DjKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSA7PI0CMKtuiOwR8q3AP%2BRWeUZGAx%2BlH43CkQ0f2Pr%2FWMKv0EtV5Dy0MITC4YYIu4Kj%2BUQN6GdSwA6xevk1rzsVGWyKmv2AGMusQjQmwu%2Fgnug31UtcE%2FGd1s5ZTcm1upjxZoY%2B3Qmo60qEE2I%2BAIfq5mSLCb1j1wcw%2Fgw5p5Mo7NSo6iQ%2FGJxB6pvVE1uZs%2B58nsQD18%2Fo2LXHBgbCoXd%2BXHkNtbAtuhFpPsR3fhelnMxehIH0B3%2FNSoDlYEeCIX5qCLEiJrv1jt%2F%2F42Pj92Cqg%2BlTugWGgTPeqkB39vxLRGgzYDB8Mu69qS%2B0FLuHsqpZJHnVom2L22g34jQLFppSgPSBqlQESfylJK2Y66iildMzEf%2FlzCMuolIfTsH97QViswNaVP8StyiBcSfk8d3vQCx%2BVaTzUOXdqGUNvYCDD0FJMyI9EV9pIyIx1TXlLmljaliWkmrVS7R%2F2ZK%2FRnc%2BO6FIOH%2F6zJv6X%2FMCJVWl4Y%2Bma2JVJrE%2BS9VnEAC%2FDHzhtrfSFsfp2hC8YaS1rEmPk8PJXxXhtYtjqWTTMyowmQSg2d4XYhGhWMDZ0bVBWvS0Ytac7m44SPOFopD%2FrhWvU8zqZZP3nbGga9znpvUx6dte3GLfEj1hgOxmSMC1XJkfrLtyUHz3CtDzCNhanUBjqkARoNYxRfGLfd0rvnWHQT5nzT1NPe7l7jk8KwasaxBtz0TqCI%2B3HkoRVcqHMHSznOGliRoJkFtqwvt9YEVD7q%2F71hg1tLRZKkqozJCzrZvCnz6aukkNVmzESSypm%2Boa33P03B5HV36UeCjV%2FSYSN12CpPWjsqVmfLJ4sWheh0plHvycaCqqazJjCqsAvsdXQ8rx%2Flo7FnRpFyfYehlNyJ62Isb1%2B4&X-Amz-Signature=39f90f5eee872f75f95664fdad6a6c5cf34aa01ce8630bc77bd4b69ad3bbc35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

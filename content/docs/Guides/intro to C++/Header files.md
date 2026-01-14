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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDQFZQA%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIC1MaDn7AuRV06%2BKz4z9MSqpctV7dkICZEohnSo7xyRdAiEA0rR5%2BN3P1wQFYd18ZWCmvPEwp6OXWZoU6fqUknRDR5Yq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMxRNpZ9yZldG7Ub2ircAxYrygkvBWSEaYOD2R7STuSgi0NrLcla%2BwszA1H5BHf%2FASCVo1NtK9%2BiP%2Ff%2BtYyTSjLuFdPnGRFTTpcPVZdbstTYtsUFVbxUaMebj8GB4Sc%2FYnSsXzI2e4tt65Yz56b8ymmgRJZUJGGnLf28E%2BLAxVNbhBoP3P0dDKIrarjP133ZtInvvDpl8wYJV00TOfdvsTMrhiZZexLusSc6MmzR6WSTAfXmHccFZiuX8Rr%2B9UV7O4Bp1zOhDo2otcKBZbG49HofQAHWSZ0QuVvMAfYyqHEOaX3W3v0ev5TnTqfSc6JqNuUv0kvyKku1RdGsWliy6mUEQnqmX1cyZ2x0xMY%2FAtwn49OuIwQ99mg61fnt1bntVMOqpj%2FISLNio2zoNHI7mTG%2FHZYGhfi0hQVhVS5BMQzMPq0mx9DEo3apNrK%2Fb1jGBDl51RRDkB1IVTLy63SMMrGXNJuE%2FTSjdYXWiVYmW5lpiBLT9T3Wz1FwBkWqfxNcmcyXz4MjMixQwOIG%2BAgpURnYQpBUMUcmx4pQrgII3j7Yp2Q57Nazwi%2F%2BgpH7ZhSnxoDi0y51u%2BZybDTCiR2ausdnOG1j1JGlKLQuKU8By2rEHru9QzpZVlcGzd7SdkxeIh9xYoysK%2BvoFi1NMPnNm8sGOqUBNCLgC05Dca90GnEUVXHXpZXK5Gk94vtNUzDnt6GmtfobjV3PkFAP2aDCGMVg3QkbpvcldKqtWFLwc3HrX1qNUst0zf2aqcQ4g8NlbRREfE9ZpO6RgjYORZ5zTObicEi38jkR6NrHoC1YeycleFSvoByR0YyG0eDbCiPyzaVxxjCzpOX3ofT%2FXIv0RRPth3174O4JUMiJQBTBdgAPKFCCDjw1CoIl&X-Amz-Signature=c38509895bbf81ceb7ba40a5d4e5bc39a71e19f4161d3bf497bf3734bb12ac55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

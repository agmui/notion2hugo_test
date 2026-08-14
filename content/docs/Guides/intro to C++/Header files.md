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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HJATPBC%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHRih7mJ1SwjIgBEB5LJ5wufrNmhy%2Be8hn37mAtTmvKXAiAksdbYwEwzGtELPiybcaWsaJfHMt%2BnUGubtQmoaZjfLSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME8f2tZ%2F6PhMTyUVSKtwD4%2BpdXJNw2aUdFcvU1nV9sigee11MgsitJGddzLrwCMFCvWY303dbLgx39wnIYKYxQpXF0yL7YYWoPiMrEvKpbq5Uu9T0UZEo%2F6K3RRBVex2LPbsipefjcPqjQZhJ1phUMCIv9614gwucgvVaeOu%2F%2Bgh0W8NZjONs05GPCCpB6RvxC6rSIU71BfwTV%2BYAOngUaTnfyJB7vRqe2lKmvsIBcU3uko8IDER2nLzHpd4%2FN4muYNpYY%2FpdXzeHSG7YFK5X5vfzR6eWEscR%2FU0O7%2Bfccbust%2BgJ9AvbhlPxyYpzNXLg1OL2vmGIz79FzCqRfu7HnuzWwXVyyy%2BG3KBxH9V0mZ911o%2Fs7nFK9A3bzRUyp0Yl7befay%2B%2Fn5IBr%2F%2FbvUf3MsOD1h6Xd3G0zZu%2FLHN%2FozfRoHOF%2Bg2OlUZhdB4k9XIRjqtmMoHwF148aPf8M6bJ6P47ubYtmvfJFIp5QIv8ksuZQTKcgIoC0u%2FsdYno2loJBJsdRq7ORkJDXNLulK5Aa%2Fipb%2F9ThT5rYPskLFwV7XKfR0cqxsJ4usIwn%2BfOD5Nd2YjZt1QXPXNeNkcSoZDs%2By3BRvVk7SvgIDY5WEmJ1%2BIYa4fTGK6K2iWd9oHcfpkSnEi6Rh8QuRXy3dAwmrT50wY6pgHokn9zikWmkR1anSWg94iDQrBXoEIOQGnFqKTXEdgmWyA%2BNGKFefliHTygrB4V9oc4adR0dh8BtspSkuvfuFCXKHB19c0xG%2BIHU9TplD2rZJM2b6FURVUa4P8F4kfVwGcEg3aZMGYnk7L1uuOp116XOG7cCYnLhmAQ6ZYw71JHUr0M7b9CWVZfZWnVWFOK0mW1dUOT%2BlUzk6YbOrvwVaK1NcDWOF5X&X-Amz-Signature=bfa3d93b5fd9743ec22dd391b80e687f6189c32bcaf2fe623ab753c112f51af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJ2XOCR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoPpuk8UH8wtKGI5jeQTKkL06LAAK7t%2BeOMboGi8i5hAiEA%2F8FVNpnSR5wzmXZ4%2F0v35a4lZgg1XSPF4G8pmkTe0AUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENjSmINozWCrmhr3SrcA2r%2BwI2vV2wYSMwG9y2Bo%2BMclTDQ4Cdcc6V1YH0dpPm73Gtgj0UrZxNcx2fHAFaI5j3VYqgyQslHSuXDHMkbkoCTP10KuRpjZiEoGpAm1IYKprIxveKqgKY4332BPiGGtFSB8OVWoonWhfZc6hnd7AT81TW3%2Bk3Guj0WNsKsb%2FOIHpA8eHPlZVvbJu3g6d2slyFUOWZ8cuyDeTbJxObsb4o4d3n6GoYsf9HawelIBWRo3tev7yGeTjnygfAYWXLKcklkJTJN2Ka2O9d8%2B1WO%2FxrelPSFCjcyHml6s3w0rDf1tm1gLMhcYGuxqPd13zZreE6FTdeGf1KM2xk98Jlc4mYtO35q2h40cm1nFjrLlKMGb0CXI7yxicZ%2BDH%2Bf4NBUtIGjbNkJGOrasPtFWPH9Usg7QNyAMvK6tqVun2cOIbWxt002PjZvvQUCgyLsxdgdGJlyQge6xNkT81K2ZBuL6iIUury9gC9RHZHZevfMNHDCgtZUMvHZShkFO94%2FRXSYofKNAS79wxro2VQUaBku0JV%2FkPyj9xoGUmqnfU0FSdYGmvZwJnfI5Cs6TQa66Nl%2F04gavcYE1SseHYIgPu3ZfRKjtK95hKe1Uz6dN7tnUQ6APJ1qrDIEFfFNiA65MOb8yMMGOqUBBIudTjP%2F5ykdPSCSRI8u135uKmx2b60y0tvWg2vDCsbtcKSVRVHz7R%2FXwcj1buv8wyCruVocxLDvRCcQWAfRNAmNg3SFn8ft1cQkdk4T6v188%2BE%2B4XdGi%2F5AAWihpeMzDv89a2OwGq0HTYWmVVxrfQfcwYwlltUtdHWuGpJFrSYxeSL0wQ2FhitPhqiTo9ep80QB%2FQEI8M26bear3bVWRSpy0%2FRB&X-Amz-Signature=1f476ad1699334c88535a3280caf63e7fc89152867bfbfe14c4e32ff78226dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

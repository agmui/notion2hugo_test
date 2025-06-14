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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSKW7EH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDGyaZbvyb4p4xVFXMrQU0%2Bpdh%2FcHvphjvghVhIBZJeawIhAJIdBN53i0sS9yHcR%2FXi0bBnPquMyp3hY%2FkI46gOWvGwKv8DCCAQABoMNjM3NDIzMTgzODA1Igwh0FE%2F6s8XIDvglgkq3APifEs%2F62MpMRjglUxrfVJZLBORRiFmoGt9NmrO3oE2WEiBvt0M0twrZsOtLVhnL%2FOJuobMNz%2B7jpcwvuf0skWaxDxxcE0eyKiCFU9%2BPrktXIbNapiDua0SZkHx%2BvbC0MJKYZkTFwaf2iGJhC64tgEMak8KargKxmX%2B8Pz9XnB0Yd06bgZtB8yon7HvnfQ3EqeonAxhGra8iM3JuNK4ONvrchjNmWaVWIWRPNY852MViL2lIpZYTMryDN8czHr%2BCkQmKUZSiCcWI0V%2B4BMoXSi3xBwOWVirfXW5Ka6x0I%2Fb5h%2B9HdUVenZ7iOEODWwxqFgwMeYpb8KXKONTtuQEPHC2nAPJ%2FGkQE4hU4bRAYUDNxV1eh2PJHUu%2BS79JFFTLqBvb%2B4lLKTSVaaX56%2F0Y%2B5h9fi%2BqUGFl8FDtJPxLHGWEiQbX4DR58nC6DR3PMscZDOt31YtP5iPwqsjzvIFrdBXhOVP1cHLBQhYMVZUrWHCQmsQEYKq697QsHC%2B%2BOz3%2F%2FJeEFrh7npttEeVMqFHrcGyDLjskZXEe3q4szvBDqpoeBPxYpRcRtm3voElTT6J9DFEN%2FmlkHFAemCt1bg1Kxclhgdo1jils7wfd7hXjAZ7u%2Bv7iJpUjCbmHHKyO6zDo27LCBjqkAa%2BvZwRSCVtRP36v75bjZdGUJWfxMForl6VDHnZMclreTCmJFSm%2FJ6OwmESpQ%2FoBGap7DpDC%2FRKT2u7AKrXrcI6YLDICX0L8ex6G6G8a6Kz2TWN9T%2FDbDuCw55DdY9aKnqP4IKO7c1hx28USmNRmQX1wb1PckSdAI8oEtx2u0F9vQEZIURkPSIyxWh6iSSxF%2Bo5GkYgdYdNzZFAAK2gaj%2F685Q6a&X-Amz-Signature=c1bd1b32b654cfe4f70478e5a15d527d9c071fd8f4dabc02edea90d59179ae3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

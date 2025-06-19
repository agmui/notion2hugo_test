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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DQJJZB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICc%2BuCExD1JWzEvjRIt86PRywjIcQJ36nkbwYu4QC4%2BCAiAVIe0S46q8rB9WyHDvWnBNnVcEnO%2BLUEbaknj%2FJV%2FFryqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbG1WRtqQgovjJy%2BuKtwDHIq0Q0X3AovCLQX6ED7HGGSLH8hRpr4MT160ebJ5cRr%2F8obsODDs7CcG9Bb6ic5mf7eyjHzTpEjobX0S9yO1QcbAVtlmSFZ96ntARO2sZeKCElS%2FvCTVIk6jZqUyueDVFAZR9mzLZZXxyA%2BRixyeMWahPf2O0yMX6%2FPkKgpKwu3GlIdPIVVT5OqxJXWtJ7o3%2Br89Pir8V0J9%2B14iH34PDXo957rtF%2FLiUsbC4Wqw5YzWxSe9eLkqEwtTAr%2B0qglfBwxptA4rGgsOJ8wftFvPftKTinBwGVx905tdox2kuKNRGbFAAOGqQ43EQddAWw2Cwk7vIArnZ1aUFruDsGC6t03ulefdsd0zHi50dAr3fcvd4nQVQBaZbCOPU%2F%2Brqcljv6ibMH32PRyBKMmgPyViOvUPBUfOGpmxR9com15jgjL%2FBCRWInmM5imjxCZESLIDPmZMLDo79obOHo7PSxtUuMWalM93oZ26zkCzV0rPxPMMvK%2BgTx7VuETAkmLajMlVKl1He4GpTkKbAl5%2FsZuy9Km3U6BOV2w2OnpVmUjEXFnm2%2FUnmM4OESpJnDUrQl5KSdBkkmcHdtvZjwQDhnA5iV7Ua6QsgJ5TYdKiGzBKgr5m0C0TzVPWyJcofKAwwd%2FOwgY6pgHrhrYztLA7R8j7wC3VC%2BJuzs%2FSCiHgzzCl60zcc40lhPX5Q%2BHCKhY5LQjw%2BB4QEzFRS8P2%2BmEwVhTJdz8m%2BzVWrTIhCya7kNRGfbk22i6gvw%2Bc5wXf48Z3fVl4NBYcTjuzD55hRXwVuLXZBnkY94wqJcFA70AVIithXwU1H1iZ6rBkpej2WmsTnfLkqidZXiR0rn5976%2FipIlfiOxKB3Tb1yh5Wr0u&X-Amz-Signature=4250e6772f6d2d2da1e577c0be33093d06ff668f16b61e2724cf1cf53f0142b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

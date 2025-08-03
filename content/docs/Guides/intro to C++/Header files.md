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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRL424QC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkBAWD9YnMgQ1eYAn0GxmSQOXhuezsQRJYA4MyhydUkQIhAJCLaxBnefAs3gWZdNzuQF4OtcIYUHrwE%2BaMw8TtGNgTKv8DCCoQABoMNjM3NDIzMTgzODA1Igz%2Bwc5PMxc7Hb4XZLYq3AMDgYf3b4G7eiNDtaxGfd%2FisHF9QIB89odaV20yLOq7IndKPtVU7rGPcNvv0TaHubDQCaSu%2BuqF2J4bm6p8RNBYnPnAfBsLyJzECTc1MJAe0%2BshRDy0As8IOa6B%2F9vuRfXD3XpsfzOXxOHnxauVMecC%2FG99FsrWVga5IsfwgU1Oco2OiPkfscdyrB7NtGY5%2BrVbBiTqtdie3uoZgTAcO0iStCmsIBTC%2B%2FV4oir%2FIxnsh%2BMlbF%2BcvwebmpufexZRqo8mMNrCauwXjmXuggOVbxEs4g%2B%2FoIKGDeTx4FrPb1iKBLyls0yklX%2BzpiG1q2lDHeASsvyVKGsHpev1kUXo8W3PQTiRubd7MW15tM5NiWO45qHW75enH4VPc7NS867gWVhRq%2BVCCC%2BsInlhV3jOkAdgxJmeOQK%2FryZ5isLSa8NBtDyvrSqGb72%2BVkq39O2pcEArz0AguD9LflslLCn1w6t8X33uS0yEBapU6Y1jkCpf6hKEkyWR3YzVKwCxYwom6wecrN1zO5ekz2TTHC%2BUJt1Gf5zK0Bo0bfTvqXSB%2Fnm%2Bq0%2BZHM3Ecl%2FreLYtIHpLe%2FmIoMHK%2FtL7fixyP%2F%2BvyChTieUBQEbJRYJGOCVUBVGEVvERKlgcIY9mAwjJ0DDXvrzEBjqkAbsfcgd3fheCErKM9PFFvee%2FHlaSHzGl7ANUh3P49Dn9GDG8uI1BjdpCFRPJYTyUq1k1nbIsi7pw6ExLV6Z3SLdwDmHrR5tXFUho9rwEVuRn77mKwMBSOoHX%2BmqRJf0weh0rqmbgbKa6FkxtSLyoEAU2cAqa%2BFO56WlYaej8FBF9tRXVhov2tLVXzyppDSc1rRY7vmeNhQzk0ZEuWWAhZDepCP00&X-Amz-Signature=b33e943e80e86b0667152e0b15aa2a5b0c747c8f00a3b591b16f70344f9f1e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

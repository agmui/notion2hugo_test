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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKS4SY6Q%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIEpM8AgdaFXo7gCQNoISdHEf0WJXpFdXQAmWt8f%2BeITrAiEA2q9sVmyKWluV9PPmQZWxkvwJZy7DGfHB0z9pZ3oUSPcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZDCpoHDlJMNmUKTSrcA0%2FGyY0ro6Sy%2B4M%2BsmAjfQRCp%2F6huONjDBjb%2BfXV5OolC1DJP9bpf0OseBjWhvce%2FL8ZJlLu8cYQchx4eCgDD0wh7KvtoqkkeeZ1pb7KIAuxs9LUSKTXLb6CIsWLVP0UMSx9PpkbOF6J7hRQLOg8zhhzageSKYZbNV8hwY%2BmbYQFPe4l1CLdNDIfnIjJuwI26vv36QHRXZAl8O2whnrX1cYy6hBxyN5FnN8Wp1jww75FOA%2FCqPJKKOYFJEn5rTwF370iOCc%2BTJAjO5W81X3FrZpk512we6NoNCNaoYnci2uBVZllId0Y5n%2FdLZrwXt6Bvl8RdeuVUWbqtc2kdhaVLrJMMcm4NXA73k8hqwDRBEC1L9tNw%2BApMSIUT9XmCTGb%2FkTBT6PfpTd%2Bk9mDAXeryQZ6dn%2FSXTQaT0%2B9Nz5TiYbqnhGCw%2FPxNJrE7jfLH2DsFMrxXHX7FO6vLhcXKFw3KmOzG2R2S4i6qbWdKjjpDWTkJHDIlKMAW8d3oCrIkApRcptqQj3g3r3qlv2BPQvkw3y4XkXAIFt24nRtj%2Bcx0SAe8y7hVat1D%2F3uPyOsYArfJNnUZZC2sdrsiSMoFtAoZISffdEnLgcTDNTn2s2xar3ZN5gqGzbqabZEBLmxMKmZq8IGOqUB1bOfsrRw2CuEmPeFFNYS%2F8XkSJ%2F8FMxc3C384UmJFG3cGdaexW5%2BgqJ%2Fz9KEWhEjQG997Jfd%2BPYJJ%2FtLLaRt%2F1jCYFEeS05NSOTDA3O1EmfUpHhFKlnT3cen8AoHIQM06w6iFCV3gUSygupnPG7dkbj8oH8A4yBlpu8keb0eGGyqbZPPlesEl74GaxPuaKCEe9GNUN0frAas1rcPWTKXiqgWihmX&X-Amz-Signature=df9d6f3e7b449324112dd91b63bf6ca1124741bd064c8efc6ffadf2b5c527ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

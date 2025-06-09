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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6YQTPDX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBD1P1doGyk5S3iScuukdvH4eWTQl7fp0jhIhJ8abyt1AiEA4W0e%2BHGxj2UcNzPXnQjEgF628Hzvm1lD6AgS4Dr%2F3YYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbo%2BpITu8qHDOrDCCrcA7hm5Q3XEIIWzyK3k7BcDX9P0DNBpWQ6Nkvv%2Bv84WEet2mr7D6WBLpOV2fRucJk2qIihHkOmk4URB2AG929m6MgLXplNQrsaXtXGQxXf55H2QwPUR%2BK4UgyPXylW4m%2FJUBRCjapbB2f2ti%2FIh2gGB2nKypkEOHCLT0qxxfy%2B0fRD40MxMyjYj2kd4XYJYiSX2OlQCR3caNboJuGy1Tn2WudwkMSxXom0f5oobN7DSf6ybU4%2B2rGdVxXFWS%2BF27nCkpCHIkMN3aBeFRmtXCsQs6lcxRb7ylrDwvHrQVDxqobgfkO0fkZqp%2FOXjH4SUMZhlv4GV5LtAXePvZcCbIBAjMhF1%2Fsg%2FAO7K1uUbuMDppZpixD%2Ff8jZtjCv7r%2BMF8n%2Bdd5q%2Brnh37%2FGXCuoVXuV48eT0XTY3qpBgelkCu1xHgp8UnkyTC8pxo5dt2s85buAlqExpkSwgNfZhZQwhOadEnB4ktPB3OcTt%2BWVfp38d9bitXLVZ9jGF2%2FECm37VZckEyQVJ%2BpAoYsN7ZyNuDaOx%2FZhiLN8D0k3Dl1aHR7C8YlJXChOwp8Qw2oOhRNV1uVEbKbIa4uB3tGTucQfR0vzh9mqL1LKroIo7QPhpEgXn6yF7pgD9JmP3aYFMXW%2BMNudm8IGOqUBcwlypkqr426XNb4K%2BglZqHfnyOEgzAGVNsegkoLnE42dtikhekKtsqnv%2FBgIxHkYUtLfcjEbzt3CndHlvO3%2FKB86uD8m%2B2DEC5DncSgqmOVVG4L6wnjNPR7sh8gzVilM%2BDtq8UJNG1hTwMSb9y2XD7ff%2Fw%2BhPslkYvq1dfl1yUhwDf2vspwgpYCvi6Bo4y1DasNIqlmVf1kXgXcymP2otCsGpGBN&X-Amz-Signature=494a045bbce091d2d72819f2e936bffdf0fd0b36f9c2fa5a48745df9b9279e96&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

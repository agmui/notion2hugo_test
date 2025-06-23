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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM5FQGFA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC2sFKFPFTiGitLRHL7JZ%2Flg8hRGsmIzWd1o1ts00s6IAIhAMjhECPcbXK8QgG%2BsKzUMrbVW5j68vY3tDahrsbPSIpGKv8DCBAQABoMNjM3NDIzMTgzODA1IgwaayCfv76Y0m79W20q3APxUeSstDgXKbnABA1laZlA60flSsf6mTukoibTJl1Y%2FF5HEC%2FrHgB%2F20yzyuEZA%2FvE6m6g0TrJkX57onbYdiPGODT6BoCTuLqmHiCISPRs63RmpW%2FfuSXINaK9GrG69VKHmW62agrqkGvSqQFq0UFIKzxUbvVAab23uegW21B1QiW9GG%2F8abqdgCuoUpvUh6KKBvgUER4dMz%2FQJhWjUicoJPj1Aev8XalktQ6pw0Aa7txOLNQlnWFqUQhF3Ez3GB2oY%2FdDZQqzHBiBqd1o3Uh4N9gTBqf5PSSTxIVX0PBo5xN10irtqJOeigbkvYGTymVbtbqw4IyJVZlKPhJjqMrUAaQuLajRxwiViDiTyXJmVhoefTsCuzW0L958OecSuVCrEHVK%2BWl0qUio7Mdx7wZxh6HyN9quB0LJVy004V2aQqEGrEmv0XcINwUJk3XldG1CY1EZwxahcCQZYguuIWYBTV3aRXp2c92h4kDY1cu25yhO6KAW%2BCxjBCl23V%2F6KJMfNCCv62I9%2F1ioTtv8x8s4X%2BhQ9sqdkrYXWOUxZIFihLpZHVcph%2BtmtMpw4qLjC1eJFlOZnenmJnCuF52RWiVoiw23pmAoQUgSTDxJIS1uTMnswoLqShdpPbaoYjCA8OPCBjqkAfLxPbiaqgDQOg9ZZWzETJmTSTWeK74TDTel%2Btf%2BePWJeVfSsKjwTAcYBMw7WvrntTMCbx3MtH7TnaTCGV%2FfRxG62U%2FYYKZbRyo2xHhLYXIMNcGgPm5yMCd8o39s3m7ARTU5YfOyzPGka5bTvIylOp2Gf4viPaTsn%2BNq1KhlFrjxIxuoGGDhZiq%2FZ2RshVMLOC11H7w0qeWDro3i1fxjQ0cl4sr%2F&X-Amz-Signature=7e42bd9df61d1e7a719f6dc2b0eb257547ad6059b12ef05275980e0704c68579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

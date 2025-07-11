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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676PMN4ZX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZVqYiGafR%2Bl7fJkX8%2FQVPGY%2BAxcEwk65NtL9R6wy2BgIhAKapzqHf2gS3d8BCSz%2Fa8F2jASQgDQiRMIGfGWQAqXUEKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykoWJvp%2BzO5DgXRHEq3APhtaHVFp8honuDQQruNRjpOLfIdTzDrmzlTuIfJbug2ROY7lMsDdO2v4ckB%2FCKsFdEnIzURtTBclZvAIo%2BKpvcGyLeBP1zQ2U%2Bq5atXwyqCxoutDW7XoKDJThFyL56DdQ1Une3j1Rh3nz7tWNYgYCLTBM5qJ70fBRvd9nboaBmhklc2knOM%2Bok8DbV%2BSnD2KnZxDYAYeWIJ5WfH%2B20onYbDzYLwn8YFFSVLpmW%2Bkom9hZYsa89o3nH1z0b4Ix04YY4paCu97BY%2Ft82nRxWxwVHlhJEtAWJ4jbjKx879xVytD3w8e%2F8gos43iLmG8dXC6hKGr%2B4kWtfhQzFkhBMH3YTXMEgTFRCc9QpfW7VsApG4xJIwWwHUrrLpQJ520X2qXMXO1vUlAg%2FNfrsVRWX61YF46m1HjzmhPPR8mCT6mo53%2B5GvOcnoz%2BSOjFE3ZMebnd9R9O59CliWJMmkPYyHyZtYl64D4yd%2FOZV9BZJFBl3ZU8f7Ro8du9zmS4bvS432wjm9dy0PjysLTCs74kmEDuJ547xQJvtt0tuKmdip%2Bt4RDzhkFXBrYteLEoTymUg9Oa63vUkbawLJ9kSMZ2J%2BInNhebBALbnPCJdhaTnbq0K8Kyw5RSs0wMrTunAqDDmqMTDBjqkAdhBXlqmX440RdfEnMGjRWsER3sBsOThwgHj0eLzr2XrNeQ1LxoyYhH4w2q9VMM6umOJvtINRGsJKnO9yrjJs%2FbjhlrdpIXKmPwnVskfvhhk8pbLfMkwSxhYTl7SZDNKKsqJPv95aZ6L0p%2B%2B9pmlhWF81vAwwk%2BU9KuPkSsTiDBL6xf7GaIlF7f1ct26gEIHUhQ%2BEw2EjRN2R%2Fk93AFa4i7wmftj&X-Amz-Signature=b90759d949042d23999bfb918d01a92812c9a1ec02a94264f60a8e7bc8780908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWEGZDJZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFcClvQ%2BizjJbbBoXlsquP32%2FYzN%2FGVrD2%2F%2BDO6I6vwEAiAlUz%2Bq2jweXaZmWDYGvuyXQX37k9WNTliMiZVka9CSBCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMIqXrGnefuWeojiGXKtwDVUcLHc4mKBjqQwJf%2Bqf4SnhRSPShS83lWfx2W00An3U%2FKapv8ox6PIEaMERdFot8YVI8y817%2BGjB04dntFYqiejRgO%2BeFFWSeBtsnDdBR80ay8VpymaV5y4z5FnBt5gQzfp1NhfjS1BVkUp6vERhlyKEFUD33xeNSAVJY6BsUvarHnmfKreLnpv6dnTQNVNXCDIYKXm5eBbF2U9FA1jCECUGzkZbfLK6wYCXwVq9M8J75V580SVMpwtoxKMV%2F9YJ7cjG49DjS1rRzMkN2%2FdtDABSXHnEPxZsmt4Te6n0tO6vGDSkLYSdBFjloZ0b1vHYobGSfhH3YET6YT9PquvvfwO%2BcSy%2FBVLWiy11ZRmgkjseKTDkgGoYbohr4d%2B3fSWu5nFvKkuzRsm9VYPsAPiFrYwL%2FZQ1qmdqthJA0ZMZytAY%2FHzn1EtG%2FbD1Ffz%2Fmb1M%2BiC44P49L2b38CzD%2B2%2F8sHrK9CB1i8ddIu%2F6HpaU3MRec2U82paAJQ%2B5BrnpDpSsX7XRW5c6BgmYCHPyJOCXb5UOu5V4p%2BrEgNnkOf9BFgSluDlw6mzqOU3HR3uUDwnOjDrpPL%2BXicOZosnWRvrf9qW%2FoaFAKQFX2Hlbk7WvzBtYnnCFlhrfcdNR7Mkw6IqAxQY6pgFDf8LPfHbp3r9ZP70xwxXT4mKF8NovfFZgyt1QCXHP5MarR2Bzz%2FGKPMfD8maZP2nROaDvqZzwjZg%2FzNmEBhA26xwcNxJjCXUL%2FMH1RLmxv6wOTb%2Ff2uJgAiU7rAm9ROcCjktLAf5tof%2Bv0saWC6lzDHOAqm3SCKiP6WL3l8r%2FXSAwG1xhgbvtO6xXKIXG57AnOCR9ckUENzdjHUA7bQkaBxYSgXpb&X-Amz-Signature=5b9503cfa7de4d8d86c17843480362db969e5d4aa96c3ab4e5cf7f8a61c2a42f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

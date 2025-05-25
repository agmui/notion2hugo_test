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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCRC5HJW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIDene91PpdjwIelksJmCXYcjNfGRFmKRBOGRnSkSr%2BZUAiAfSrXAtgvnXM%2BNXKvOAy%2FT0Jgjf0KFTm%2FWBpqWOlk7LCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMJLLMicFqb7JVnUahKtwDp%2BtInPpJZgkApceihB%2FnW5zp%2BcLGUrAkzfNlRglbXYSJM7CjTKbRV5S796IWY0Xw4V5t7%2FdvObhBmIGldojhsiKCofGzDUpholNWAz7RuPlTxPq%2BkFdsiJ635gTQMWJLk6%2B9xpq4SPLCL%2FNuQwo6hiDQhLwTVXKQmjS2Msjsg6pwvvlxMQMGP7DaYvqhuG4PIPpampHESrnjrzchdsAb7EymOZ16cM%2FWe46XBIeCVtTHzE16g9wY7Al7skKeViLhka83OWj0rJueKw6H6x1HLjpWAHAM4poD9EU7idV562NIWm8g40HURzp9t3%2FsZT%2FkDn9ZmFlF2Q7EMPqUZ%2FuASkNSKM7i%2Bdt5PVDL6d3XR9HOCZfqtIzh8xdDqwF7CUpgzA2vka4JqnBfAYTslzvG4v06WACujgh6yqUdP8UdKBuxcyXibWCO7Ampx4ZnpB2s2oJLvPH4DUcYC5X%2Bb41WUKayt3mTOaU7xGv%2FUSsatXzkOqSm3EUnuzuWFa3MxPwkbc%2BWVkztYQlsoee9j0PL7znYqhKoSqEum0jFaqp5%2F28BU1JlWt9o3vE8CKYyQh9qaruHb2YWTjU4jFVWQ2xSILKD%2BvzP946roDn%2F79v1ugp8ZKb4vdU5I0lEFIow4v7MwQY6pgGWQXCiP%2BferjE1f7G1ytaqYy%2FuwlnUeU5uIZM8U3PK5G5ablEHHgjgoAiLeN6xn4kCBsGfH5jow99umuQJQW0KcJ%2B3JTvAx%2BWD5B3mdDx8xIG3ClZDXjXmADEqsqwBAkB33SacUuAgtAwVZvjJcjpw6RETmU9OeS3vyYevW25MXD1zqgiBEU6mzvVmysRvAOvvZl2zxsOm9AKzRP6m7RO8GJB8hfNN&X-Amz-Signature=df71bcdf3add4aa77092c8ee8aaea65cf0a32cae3a9a924457e6639dfcb9bb29&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

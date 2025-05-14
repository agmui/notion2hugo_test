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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQP37IPN%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCUTtwVzrdS1iSMKxc8LIOVmCl5MnEzeutg%2FhpcAElEBgIgfQ2TJISNUdlthp1FMt7P2T4TjaAjcjYDpp%2FbIIsrB%2BAq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDCZdVnFVxJ%2F%2FJ0GUJSrcAwPHYFXKQXLpy%2FecGB0P0g7KaLQnpKhN%2FG8KJNHLeFGPS%2F7GZ%2F%2F7ub3qBTNsr%2Ft3IJ9ZDx0aROGR0EMj50VWGpLuV5xJWsqQ9hx1yQBXbMW%2FqJz79mh%2F9ECjrCLk8RJUCtraCdzfEETT3%2FFmvPEM5CzsV1UTd762H5Npi0NfsAmCHTWRi%2BGsreFNPKNZh415q3E9zD3UBX%2FkUCyQsnqyssxx9E6sfMqxmnpRnHwQdMrsPlJ6sH1%2BIOD7tvsD%2FGUzJFzwkMjLfbnxYPeR4aq7TBhdCP52kIIsHy7gJtB4lJlwLSADN%2F1ZsaxvzSLZVYwkC8SCNqyUwZSGsZQDJhzZzCr1pURX2DCIvYglgLQPemgpQ32wj29k2GmJrF%2BtCd4OX2njhQGJx1h%2BVE19eSp1NL1kPobQclJG7e2jUm2wnS7XZBoIQNTehQmb7AhRhIYpOa1YRU6KF%2FQ8GTHpBQRNb1KSNd6tiIIc0lVx19ved%2F%2BEx9Oeh4cyO71gvl6a9bL94PsLvk7dkCkW2islS7gOKEoh7etuYytOprl6lfuvoMKd14rEoy%2FYbJUMW1iO6Vt3VVtVNdyUb1iYQfxCDJTHRAtH2xKRM3uVxZb%2FMlWsC2jf06MTptl2pY2oY8jMMOzQk8EGOqUBh2cDKvKjQzk9SDPLVVTNfuFC%2FBp7VyZ8VBw92O4MDnUn17vLuc%2BLgxUeTqvXoRglHzTsA%2BlnOgTbTmQm6dGUu%2Bb9vmsibWPzTvrEjBrlpRotKy0N7lgxj%2FN6xJ1k%2FP6IdVce%2BLx2kypRAiSbh3ze%2FOK4pf0KFT9lrYRRlmI6lGzoCsHSGKmhAPejz0SrTNacbQ9q2t44%2FPjkuCPzTtXrwvVtT1D%2F&X-Amz-Signature=81111fe034c6be8db540b8193fb03ef9357ec05191de059ed001fa28c62b39ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

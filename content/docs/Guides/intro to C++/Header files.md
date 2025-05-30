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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWS7EPOV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVDXU3GGS%2Fl07nwBMjm%2FzjijvVwWI6t4Jzrz2cmC7VkAiBtRgrkekMlYGeJdhFk%2FAAQBptaiEGO4FqwcbtVu2aTNCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLr7c3MRkukn2va%2BNKtwDgxWxWHIUcBhlGT3NzUP6%2BPJRgj6asGHEM5KLSXi5%2FUzgyYINYs3Obb8fOMu7M0ZiYqjt2t07Q%2BaEGulzpxgEV%2FqziQFGY18OHaO%2BRCW0c%2F81F7p09IivVIx9IyBY05d66L3VYAtPWrvuZN%2BZAmX0k6oN4P3wnPWUX2Tl06Bn6uoHIRKaNLpEX%2BZzXTlI1UeShTznuywGMhUAAmFrWyU6gJbn%2ByX7K7qdxU6%2F22itVIVhoeQGLBsuYnAfyFpj%2FthhJDr8A9oEej7gIxHocBQDg6FpGZhBvdaSNi734PqFugHoj2GFxNoBSyVtLhKNFs17FVbFMeYBngs1OtmLxNLcS94%2FkO%2BKsL%2B%2BUfHLRWM4jikAEv73TpMKdVbcfqICT9tNmlw4GRtljbZTsm5V3m5KE17uvXYUqllZE2i1Lp6p66mdArikCFCc%2BnYg%2BCLRdwdtTu3cv7A8LnitGSw%2BWwqULpUotYMdGQvOLVySvRctUfowcbXFmZ0r5tjUBw8Z2nPALniG6Q0uHfS%2FSCygxuTp1xI3hkXS9eBG2iH%2FsShR0Q3un8cwKVtdLJiAdmACAy7lO%2B%2Bgywk0dezGn%2BGWrPNfZ09ycO0DSE2zI935jddwl83wxHipIuEfRLCXhS8wj47mwQY6pgF9wd%2FWPnidxZpqre4nMNr91Du7PuPzwBXAf0dA9WcUKq40pXMXql07fz8K85lv9r4KrvzXLh9xKfm2Xl7055GOQohDymvFBk5%2F7tjcwmRubA%2B0G5KR8Kv6OZ6ZL1fHlEj6ogTGd9uyXR0kUOuifBU4F2YTXJXONrqg1QRnl9n8sBgRyJasEqps4PdKb2HIO0KXzr1jqNJvPJDEis%2Bjo6O6s5oXjVLm&X-Amz-Signature=14d05a8ae7e3ad1027421a1333a2a3e422178e93dceb977082d3ca18ea798992&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

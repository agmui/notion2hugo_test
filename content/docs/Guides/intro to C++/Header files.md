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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRP7WYJT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDmnC0iUhl1zSb0jnn2xY0BhWstJ1MNf1pj9uapzykyAQIgd7c3UX1%2F7CijeemFwIbpoIuvOODlH6Eq0M2yARmmu78qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlo7%2BJCQdLoOd0jKyrcA19v6EhsDi38OLHYlwFlK2%2FdmNgwbAHkBzrEf%2FC%2FbMZUGiSS0kmxQHCBAv%2BoXY5OWuMXhS5sMQGT3St2%2BJEb6qFHZJtDXtOb0cEnhSGYevkc315DDdSjAGr90uW97dpU4uShjR01dh6sCV94PgNaizXZPsXL3MlSn0M3KODdZ2l1aKsDQssxLN6fmC8sDTaUj9doodqiaNaJH3p8VBdQDkfUsRFKhW0D5mjsSyXWai%2Bmzj2pEQwX70O4uDtxEdF6YaCdgHkhHHevTIPC820y1AoGokk8U%2BrAA0hINIXn6JVtEv05g4jViL5IlrIDo8StZhim1AHI3qOnS0PHyt3SaBfAiZqHKO72y0aDu6mJjFftR0mHvG2mJxlk7rVYHznmKQeYnMu1IPhS4CJCEeRFyfOsrI3hIFXROOIeH8E3gIqw9VCtXQlgER3EkBHNS8kHROf0k8G97RctZ5fDysGNh6mkK3pc3J8U3x4HUYtsHFtUT5Q%2BLFWRC3vHjiNa6eG90RD2pDhcvY8nuTNxHWUFTcWMbqOgVOYoyzVC9SSkxZ5XNLCe4km4VpLKBBZbTwZW7%2FWEYLt5sUciPalu%2F9NOspaz%2BrR290LtQlrfaX5UZ3zS2IK1NK%2Bubir7Zit5MLGf1r0GOqUBY%2BCcTwflrkcUbuf7bssWly3g9pQ%2F7itwKl26jOt6nMbqGwBmaddNIDSRUS0S%2BaOhqyi9xwLprlREUjRxbCGFFjjYJhCd7ZTVFdxT0hP3cC27u2lHX3t5Y7%2FWWFf%2B6uTKXIA0utWNOXagFzvPU8iv8x%2FuD71tcggLGsburSYVezNoK7R6MhTaBwxAGWDnaZ%2FRxc1XGVqlU6NP%2BqUOusdrS2OWUteu&X-Amz-Signature=143e7914f92f7dcb297dbe0be383e5da10f948ce99661cedf9fc5fe18ae1c868&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

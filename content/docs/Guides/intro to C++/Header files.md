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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGADQSVL%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIFBhNZPN3ZNVpYHOtpHXHWmGCDZKMT0U9jWEjAeouBOAAiB1E85jPq1UF2YNz1CN81zsxUsP0vMZg6rYKEGXRsdTUCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM8nEViYFzcKm66PLIKtwDIPWv5RSdWCiQgXlbJ8%2F1kdFNvgLPsNXttGvsqJDBE3jppCq1joPk0DrNCdJHubMnRNZanv2AGYeVy4NpVMxuzPsqJkemzEqBWXwWrHW4qbfhJAfhUp3beMfwU8MoMzNkYZFD7QUF9p0y9HRVAL69nTYVubE0F11TI%2FwHoz2D6cQBzMs6MJQV7RHBk4dDprgElsx4atM2RW5DgKw%2FUgeAiz68CsWJaHbPDSQfvgr1QKIg%2BQ3XVSJ9KefckhwgNcqPYBWBhXVCk4h3XsAVyGDnsKmpJfVUYBomoe69SvNeTBXeDOezQVo0Vgx7kEXaOr%2FTm7aSJieBPxqU358GZ9nugtsfOnej58ey4JTnX5ZKaYPOOsKbN60aDDeAlyzKKz6ppvS1q9GmJFOf8j9%2BVyIUjIV369XllrNlQyVZos3zrtXYTMR8NY5%2Fv%2FqKe1%2FYnKvHOAZUJ6TXMB%2FBQBGzH0dywrXWfRVZlVOoqBt3kPJh9tynSdgcypagmL%2FpLKVjmsrQ7OsAYg5kgDtZjhrkgF1oOVMckMyIHDv2bJwKoUXlYChfidWcYRGV7SYcToBzH%2B0LidZPnGp3vvd%2FyU12rPzB78RZ9wGYflcABFsnFXF%2F%2Bn7LZ9HBHCYChBm4EFEw4qz7wQY6pgH5EB2nOpmKD9cw6TvE%2Bf5H6LbIpQSR1kBlSML2VKvUWSd5GF1uWnb29DSd27pqaz%2B5p0p45ZrjhMSOIOKPW%2FVgfeMeq0TCMJB%2FzrU61aXGYMXcfK%2F8zbLejyBK%2BTD3qc1Qx%2B56cRM8MPw5kAUPRktZ8IIZnOvZcBJlqepoDW%2FRlle5ISyPaI1%2FfCRHEwNbmgEqBQ2UyKeNufXNn%2BfoDIc4gzo8gJMv&X-Amz-Signature=7512a601ec7606b53c3099056206dcbbbd98dbee8a9ef366df1b1d6b0879a2b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

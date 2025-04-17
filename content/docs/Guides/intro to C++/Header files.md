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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VN7K2LI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FjjmvGdwQsi9ZeP0KIBg3ytRvtUclGEQRgGfgJfR2nwIhALQtVUpCJVnIEM%2FoCHrlFYHVV%2FQFGjRhjvv80%2F%2BDuGnoKv8DCGUQABoMNjM3NDIzMTgzODA1Igy1brXS%2Fp0T8E8Wopoq3ANwKUQJGXCi0ggaO1pFr5MPD3oZ%2BA0QODVS29opCUIew7GAABd%2Bn5GtUplr5kDA4XxS5nmRxAKDwFn6Y1BPuhKDdB4yEJ8vFWDaDF9GLoEPCBV9MbaBc8fZ5ZbzEwOAJFBUT5W3Oif%2FxqJgiVIKBoR3TPKNtfnuO4QJ7fjYVb2vUFftwtqTVGyzX6RFM2PYAoiJQEc0iF4Tz2RSobhNKJ7tE53Bql0nw8QwDQAa47VLxSq89DFdwlGFjMShBHXE5uMwgG1Q4k4PlyuRaiTvDlK4Li%2BHVDP4ngNwMGysN4tLriAc%2BS3HYtpwcqJ7YBzDcoYsIfyFHIAHkalDphZR8dkMZNk0CLUIHSgrgR%2Byjpk59MC7QocrHn%2FHlrDeYmpN%2BPpt9G%2F%2F%2F79ylZLQCX8JY%2FTnAl%2BG8h%2FfBzNdprp6QR6T0beVKjxJp%2FlqGctTxbS1NkQV52XrRgrssDGCUIH2JbQXuLwjFi28UDhNJeCCTSQz5YslzcWlQ%2BzZTxQcIENiuYINvIl9VYKL8ErDLl4GWJT60UAXCY96C4Nt6BdY41w7DJ9ArbNVNPWs2PzVY2OiC6rjjZiW%2FBPdbev80RZMr8SzNvT7f9Z6L541391UWOSLojAH1y0ZAqdKnXEYXTCjt4XABjqkAYvFCwu5NcoOBGJqAK6mE5UFomw%2FSY%2FA4uj30kp24vLfhL9vFYHxh2QX%2FiFlDy6m2Ui8CtqWhr6zsiZySXaVRlvP3KHbc8WBVILDN%2FrTZcWhTN2E525jNfFEoa5j7Xk8bJP7upwcL0aWip2WfvCgmB95dD2y%2B%2BIE3fINaY1q61RbNhc9uTnttrhEA4uUHEiBYW%2FV5%2FFzkoUQRXMFeyzNqWX%2BjclK&X-Amz-Signature=23ab496acf01e370ef42370ed728f8e91d41c9f6ab4809013cfbe75913f829f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

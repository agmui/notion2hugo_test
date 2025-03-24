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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJHICKED%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc9DoP6QfZFa%2F19f7R0nzKnpoCO1%2BBq3e9Ne7WMplmmwIhAOnqv%2BKoWb4aCafmL%2BcqRdjTORQve8LXXBwGgw37%2BYJzKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B37pdcgTONgFGM0kq3AN0YJANwoHImHeaixYAkO7OYwbjtaUVp1Flp0SIz6ncNYj6vKYSDWjX7La2TOnaqi%2BVG6Ppy4aFSPYwxLN55GdhDIbcM6cpykqnqc%2BUYpMfO1q4w5BUFNjfgRjT15eCCQvsgUkWV9oLdyUtYjc%2BbMz0Aqc1C4lkykNbhjUkahjYRrEw7sBN6VNZUSM1Pd84My26z%2Bdkg2TWd3Rg08%2BzFvTcM39%2BYe4nmBnkKwXexfAWv00Cpp0%2B8e%2B1dOsGUMeI1oiCwukExWO%2F1bQQM1uqAXF5qqo6u8Zd7kfXfL7G0CK%2B4WtBv7YCFS4DOvPOR5FLcv%2FBWwNbSM5w0%2FiLSvhcdmlTNK0ookq%2B86%2BllsjyQr5B%2BODPufaUAInRked9YaoSgk6sleSnKRUq6zRGGX%2Bxw9%2BCD9lTceKHTSdxyu4AcbxiKKNInU3%2FQLfWpC2QG2GSd3prtsW%2BfpDHQzrC5zCnjf1PLsInHZnEmDT%2FxEb7t0WpaV1taXglCU%2Bx2Qu6ohvswlpyxCjez%2FoiAqzTKppEEQ%2FYPOH5gcH3kdPyvti1B9u7A89L%2BAdLHLXzYJfd8agqHWfhEExqUXO8g2pTxICppY272zKTAaqtcyTz35THmlok2o%2FfENyI50RsauBttzCMsIK%2FBjqkAd7wb3g9%2BltHQd8kmIY%2B8wQUeFUIK4QSfNMwxeBhKEgwYjFyYuLxSsWn1uoK1lB9w4vKoCgP2ouqh6pn60L%2BYpEBCzgcO5HahgYqF9H%2BSYh%2FdJiPjaVMGf1TNzCcHSOzqk%2FD9n4T4OrF3zaAXcbKBBBVZmlDTr92W0SAOBOEuyCVLJGpgWN%2B1W9VgsW9243jkSqwkuXYXLbdbhr1E6mYEcwVfviX&X-Amz-Signature=f1167c1de3046075f60814271addf6f14943b0f4a8106a3267fa874057a67961&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

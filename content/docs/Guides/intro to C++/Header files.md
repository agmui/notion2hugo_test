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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z67G7COZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3P4REIeLPoGR4vBl8F3%2FT2Qfay9LBEsVgi9GYCJcAKQIhALIi%2BtAx00lWWH%2BoBB3HRRd2fEbsG75uY8X4aVfVybkzKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH6QAIIncr%2FBN0mCkq3AO2wBvRPm%2FLGsdavSQwbP1t%2BsHmZRWdQGh7p%2Bxmzp6Bdjhxq%2FoJyLL1Iu1Xha%2BmzUzSL1x%2FnswxyLA%2F5w%2B%2FKRjeR%2BaTRlA%2Fiadt5dXhW%2BBnTZnI8T5oJ0DQ%2BGpWbNM8RpPkXtuJDijmryBXzrob3MSZSMcj0oPcjrxFVD7yCY0Ay4WevrEGn4bZ8JCSmiw4m4YTzH%2FSf3gpjK1jZ32ducJez%2BQo6E10ps7fAgd6%2FzYIBB5pR3rXYEEsFjtUWzITa3eyFJtacpSj9MJ6xZIlOyAy9rXTRmn%2BfCLOlGeU6RHqODLyHa4n6QHZSLDQ%2FdSmzqEjPSTgxHnf9dtfIOruqW0qAbm8Kfi7JC%2BZXkaBtLAy1DnAlwJ32QfSjHexxk9XL353k%2Fr2%2ByI5vfzID%2BkAPq0iR1dEA6s38s7fNQN1Z8wLVci2OxTgbXKL82uGuMFE3dVExBd9AQLls1pRKnlKFiW7%2BtPRL8k6XWsukKIv0VIhHcxAtB5KIA1VK2xL1eDxo8iK4PRKaCA2Ou262ovvMsYqKw6KieELLVjLxcwok6O%2Bl480XQMFmH98yRZUrXaKFXzuAkgp2kUl0TeWnfOOHAhLh0eAxSMlcCOu5M0CxL1XLSkexnN1CvEikX7g3zCstcbDBjqkAWkPnTFUBITJvd3OWnHdOSdI8dm9Qpw2m2xvIL2AlRcICcCDcurGXYv5X%2FM%2F%2FM27nrholMQvE0H9TDYM2W7KlvXPQPY8VCn9dUI6yZI2Z%2Bvnn1a8%2FRCvRfeUsTybLI5v9tHtR5eyk%2B%2BeBhE2wX%2FyNwseuWl%2FbUWXpVUfEGdIhBWscLn%2Ffex4trvMB80BbEO3LAfISY6XH3RIzEZw4f5DszMF4eYV&X-Amz-Signature=1a7d938d82067a74ddf5d553bcd690f8974dc87f79dd6f26daa86086b5bb4b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

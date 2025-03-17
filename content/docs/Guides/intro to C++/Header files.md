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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DC2XTL%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTc7VxxLM29f64ZnrI6AWtjFkWtgrSWTvXgCGvZBHZiAiEA8fq5BXtGZew9xldvDsMv%2BhLVnHPrz9oxuu9jINmQX2Iq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDExXUe%2FVlf6CB%2B1qrCrcA29fzO65VuQ4EY0EKD%2BgZSVdDag%2BQTGTrg7i7ZHI3Xe3YUIbhjqFJqne1DeO0HOwDh%2F2H%2FUernqXFNKuuTBFB4q40gD0FevWOxbaARhxYcytISYcZtAo%2BKPrNSvEhoIfowj%2BZ%2BW%2BPguo9SIn6KFg4USYM0Fr6lc8jmLR1Zw9NqwQ6l95f1aSdWqC6wgGvAg4ctHw3qH%2BR0e08Je7t1awn6ESyXMBZkll%2FNgQscQs243IcCdAI6dPEP9NLhX99sCrPTSspMvNANokbfmxnUEwZsWWyuOMjRnXGrRlx6yt5PEXbtQ8bPyqVhnFIiobkFOzQAPbF3wffcW3b9v8Ahn6RgWRG7YzMB6JtCe9Q6HtYjI%2Bm5fR6IQCmaeRKGUwNofMYN50SFiIldpkh3c%2BhDO9C5GUNojpRuPOiEhe6hTLLd6DmBU5nrcthZMpUae%2FskDCFXbvH5NeLxD4UxbWGePpbUM8rNoBOfE5OSayaW4uYM8gKCThLAPhp6EFd7q13JHPF1xvQnribX%2FicquaJ%2BEIFPOzTYs8rzPIaoVMVqkdRQgyfmMTM9pWhrisCqhIp%2Bjytr6jBOU4bRsEdXjQe%2FxsezESe4%2FRYq4DoKnsuYBuYBZhVII%2Bg5jmMxM9FCLhMJvx3b4GOqUB8DSKW%2BUDF1tyS%2Bhya8JklJ7wKjnSSvBQViPaeuGWAkAjBIhmy5zVRwVNvJ3%2FBdvYIOD87TeoBSbQOExwr%2Bq%2BP585R0Zplqf6bUABe5kqnauYBrmGdcGd7aNxloiF5QdUTWrPFZ3T9TUWsEWiNS5vJSqi%2BtGuXXHqNBR1noWLXqo%2BTBzPLL%2Bsx14Z4rtGNS2nYnyoKe2tyCpuwRn5oEI9qemN4OTB&X-Amz-Signature=9c840020b5c0c47fd1b0800c86f02630c2bafbdfc7557dcceb031dbdfdba738d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

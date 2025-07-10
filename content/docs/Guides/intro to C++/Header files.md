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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2SQLRPB%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCePDKHl7iayhPQGajNM%2F7F4RPpwZAEz%2BdUnj7W0To5bQIhAIqxcyqz%2BIyzeOGoNfhI%2FqW08qh9wcr7HRvtaTeBF2WoKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzBrWqbuyWkmwZzDYq3AOp6AHiON0%2BMeff%2BJxSAPitQtnr9dnEgFEv0cxHpBJIsBE0R%2FsGj%2FtkJZD6nm0XDkIA0RRh%2FVQgovW3R%2FtPLQPwEGqEupkzhE28WDf97qVLOxIojKm8eJAPoc8WmPPL%2FBn030GAkOYj1kkUCvDgpyP%2FsZMpQnsQ%2Bn7F0nTlaBBLOYtyH0bE1g8NXJs7d4zvlGKmuDe%2F4sE%2BFhacwPAv1rRh%2FHVQyvh4N5nuT6lc64B%2FyYEYMTKKum6SsyUw285M7l7h4vaS8TOJt%2FTrCLd51XfnGChlgyhjZHD0oJPK6w%2BHdnjfilzOxqZuLY4moYAXg3uSq5GzTLlLI0NtU5lXiywSPUwEIDMg4U4Nr%2Fu67ud%2Bn%2FABKYPtdHS3EYkCLKOz8rMf1sHSQHpw8CxNZfBi%2FO3SlfDrk4kcF5PbK23krjGgcwVr5%2BpGec%2F%2FFdfHjaorOlam5Q5AyOxKoZKVWVhUW3hDb%2FOpBFWeLrvZGcFhUPgXCJYWeaiQgnx2rBZdFdzQW63F7Vy1RBtAUuZAh0HkMaPivBugNwFDZeEaiH2ZLnYJ5HdRUFOJMUy8eDZaoeNPRQG%2F9RUvuRTZSog%2FwbFr94jk%2FxQT5%2FZf7Oqyxna%2FSZiKruSm4fKiYVERs1P1STCX%2Bb%2FDBjqkAXmH5nNgOLNgzu8QPHLXtThUuJeemlrE0sEYqSjess%2FxlmSQyVhunRGvDlv7XvszTupCj8YqGyHarwngRxVQWLRYSw%2Bd1GWub58wrG4s9ZqnyKdpA7HJoFruBP913DvaKhAo8jjpVf8Qv9Hg5t3QDHPxCQgYRuzdLAOV0qpw2MSB0qM6meGZK3TYcHE%2Fnc%2FVqgyZa3GXTg%2B7us%2F6vA37fOvky0cO&X-Amz-Signature=c5fb5fbaafad8e7587f16bbf1e7e5a7fce5b8025b3246821f5e990d075a2769e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

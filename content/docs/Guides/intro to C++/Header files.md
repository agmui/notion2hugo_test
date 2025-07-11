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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F7BSED5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbj1hGx2orOrr7dig7k8YE%2FUiNpFFkGru6bvRAUyyshgIgUe8V%2F73neIW%2BRF70bFi0hIDnQYHQHNKaOFIaDC7JabwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzVQUcSWKy0a4fBByrcAwnapGrNSUJv2Vrytv6OWqLZhbVmO64hK48rkJ5Ht2WL8bvokYQpl%2Fnvy4EevqW3YKnGHLMSOmpVQ9mohexUI0QUbgrTmsOEJirpNsOKu9kTmbscEvaH%2FPzMK7jdyXzZzWj5c1vy5qGJyjd3W6wPwUj7UndU1PAhFReUETX68YdAi42U6NeZ%2Bz1n3DzbmUE9vDunvLv81L1j4beXBgZng9ZJxnFWFeq1alWNa1rVMLuwo%2FpMoiVV3rv6Pjw%2FEmt5TylL7OHICGbCn8vjXgpcmFhKOvS095jQ8uOeP%2BbtCWLWTdXvcAocwxeYLqZtO6SS89g4wHg9SF2gEj%2BzliWV%2Fyz181WSneC7OwPytG4gaGYsGR2mbTCMmqA%2FlBnJJjZAoK%2BpqRfK%2FlHbgcoL%2Be%2Fyp57wda6RVtwLnQ0rkCuk6u%2FTF1pVjX2C8e6NDLsDzBCcEI7uDzkNXajexH21yp%2FU8gSsS4vXP3dZaIY9AM637Lrb9W4WXv42SRbHy8zRQF5G3%2FzXmmo8LYgsLAgYWmWUXmVXvDFn%2FfQrRwk58LBqeD9YiDcxgPNPAzPm9EO5AcAOYNWTaoctVnR6IqHsYl4Fd4pwyWix7FaOqVmgs%2F67pCTvdsXjka3fnLHSj2R%2FMJb8wcMGOqUB5zB88WklP4IUHy1dfaeP4F5lqNpqvG5HTKRFha7WiMXT7hZy0VoE9xBhbUj9KECcLfCGH0B2W50pFQJrGDocQ2dzR62o7grvuNMbPHX6VewxLDMSfhncefens9WrdXW%2B%2FBhtwNvkWxSbD79%2F0EE5a1ij9SnQIW%2BWfDf35P%2BezWAQlHrMWchwT61sV4fSb%2FOxQMmWLP%2Flyt3yfZRXN3tg2julpAa%2B&X-Amz-Signature=4f15281b57b9b71c589af0c1c4b512e4554b6c70afa8c0e03cbd565ad3af5892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

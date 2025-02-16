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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXWD55QR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCdxK%2Ffm%2BtOWxwrzipbxatak1fAST5RMaYpNMd%2BpRY8rAIgCOj3hJ98fi6tpmLTNx%2F2YXwGbLa%2B3kdMn1ydWRYdI54q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDEz5XzNyjyqUL7yRcCrcA3H4auFu9Q1vbjO4wnn4sFWTO3yuGgj2AcIy1saBUtXg38pYfj3mKrZ4KoXgrsibf3gevdM1bsQbQ7o94hqMuy7Qxzt0yHIcwIuELwz8A9RV9x%2BizOuzSd1l87Abi2iiWQpkH97MFKmnj7otZ8d60GKR04rv3zD%2FxCAwU4lAuF8km%2F1cEcSNhBsfyeemQuVyzF6Ml6XHCENlwrsAmcHhtZJ244vdYwZcFnzudlljY6%2FzQkcvW7y3rq%2F5znRrPW%2FIbVt%2ByvE8HHxdpqNtckfUDOP3pf0pM5YWTuFE4S9zQu7plbpXgrnUzt1EboP9ZkbGJ7SoQoyDM3YpcmPaXJuP4GF8n6w6ahqjI0jPhbutmx9kDr2lR8TiPbemzpgfL7iLoUBJKNzpswEDwUxv9QzpdJlqBkhpvK1%2BbQoiefIiFoYfQMfeyI3YT%2FFVVPRZW%2BEy3D1bTreeiBH9xTraIjtPdCGc8Q6KLiqBtdIqhAPfycA9hF4BaC%2BDp8nBWuzT894YHGF0CvPVt4un%2BrunIw0Fok%2Ba4MV9C%2BiO5GBPW64F6TOKq%2FKoEhOLX%2BgESiPZlBhb3AJoH4vTf4%2FhmxoZE%2FiKkxdp8mQ%2F7N5aezi56cb3YeSFMcESrUjSp3e2QXP7MK3ByL0GOqUBVQXFD4QsID5mnVR6Z76Wgyhw%2BpDPQC6j%2BOQoynR66x3lLnJFCLNgNM4GRVBIQ9tYHBt8gJOIg5piGey5xM65AG0%2BymNTFjVa496fi66TZY4wCJgy9OgZ7D%2F5p7CxHymZPZhLht9%2B2J9RHalQdFk2dIZo4ymxJAXeVRgeFxc4zMUvlffaRK0qUm41fGO%2FzTzf5LNFX7bGG4Br%2Fo6SN3x9gNSv6ntu&X-Amz-Signature=4ea34f884e4dd6d17c3f6dba5dfb6377298e04ae359d36035b89dca97a9447f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

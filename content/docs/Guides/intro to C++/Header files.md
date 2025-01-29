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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZWG5Y5Y%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeDvnA0OEi%2FGlDNDaMzLMInOIsFn7JaDL0TjoyfAqlGQIgKnccPng%2B5MT2XtbQgWip2sPSdmpDCR%2FCS2fMPNmpjAsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBHVDsjbbxiur5tdCrcA9zzn3y0uaNLuo0Km1ChVhyH6kbMA5Hd2K33vMrKr2QlwbJ%2BIYrlruLDoYBhPi%2F9VbU94nUZRoezb9jD975LjBdHHeZg6jRLFJTmoRxyhsvQoGt2ffTuJR9SMf8MNhKjdsg7jA9%2FA%2BDOeqiwws%2B7BrDSDiiDm83Jk9VN3cs8dGkKucgSr4Aah4%2Bu%2BLBjTjwBio5JgSKCbc4To317BZ94pfDGRRBztNWLXS4C6x2QVuQzkHv8nulDvYImoH2nFNXts75kYCgqz5ZS7jnzLUtlOR9%2Fmkyan4tEYK1yvIKwsJesoLT6v4OESQ%2FQgw6WlCrlvtUclOiXaJDymenBGX3qIPimh9VkLzaDx5Ju3O6Eoe5kO7KDAX525WoodONCiGM%2BTiPpKiOI0DX3Z9C5RR1%2FWYu7U7XdcQzUzRH6vgnO4JxD5g6jikzqJJjyDHLvpSUIqIss6BSyUJ%2FJkHtDEjOLqnNxHsBNyXg4HiPygcX2K1X3Ql%2B2uiAIzL%2ByhCTMPKsy5KS483w2%2FoTW4dAP45vghdHdrzmSGdw91L83Hst3rLVp03s01%2B1AlYLuG6aLzdWNwHK60RPzO3te1EFSpz5t8cHHQGXmbpCnCA7qjeU5wxELtP0oEKv1qt8XTaAiMOnM6LwGOqUBbibAwhlWNU0XCl4E%2BIT2kYPEMsEekBPZC4NI0yfNudOg6bHcbWRVWpdxhIyKMA5DF8Wv8LyhFAk%2Fdf%2FTQtoSxUMhjmWakJfmERrh61UDKfmpHDp5DM5txmQvuo%2FU33qkY%2BNOk5kTfXLAb5hOGVeMQd5yXk5WTXCeA4c8ONlHr8skyrK1uiRAMDymTj0fH67ScxQ6i8gJcmglG0As6Fj2SNY81%2F4x&X-Amz-Signature=3b11a379d0371fcd9845420505b061dffb97912e0d932e6370178e7b87fe85d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

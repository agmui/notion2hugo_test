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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F4FVESS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIGFY3U08n%2BBozfst%2FNobXLfNOYucD1B7RlUkqxZpeqgIAiAujxQlD54rd5iTkzM%2B%2BXnvCjvPIRPr%2BJO%2F4ydOWwx%2Bvyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM6idr1K7ueNKhdwQ1KtwDACpRy9kRUhff4Uh27fqtFD0C9xAi8kR4rAdUusVPFvAp2XNQ%2B7ovN%2BKFoak0tlKTw2jLaD6UqSVcjNRH3%2B72OG6wEsffa6x%2FO5aUjdAt3wcQbZ%2FLRkEgNGWh9%2FSHMA5uA2JU03P5pEafyB1SmJkfcHVLUnjNFceBHr6ub0jmrIB56rMnXcNOje6LFTHfhMpBaYmiqOcEi%2BsSEGshMNwNIZ6P1gOlnVU8JrnF%2BEze1XpVU9i0mgYOJTJ%2BC%2Bpzs4CCTMz8FFZnZ%2FCwvXr3B%2FcAZLatDsEh4Ovc2In%2FTIolzJ2rJFAhlpkpxta3hUlC0KI4ZCoC%2FtDHfI29Vh86ngtuogV6rL0WxsIBW1wdNtZ6HMb6X4y6zY%2FLUexOSj2UyJ5aVRfxTEca%2FLlHXlAkukPCJsAAtc%2F11cxBZP3AdRW8yUxLBNVkUPR569RmwiFRMzJgfCgIKV%2B%2B%2Bdj9uk3GA5jiW2scyavRn1Y7OeKG6sPxe71hGcTCv5PoxZZPtD4RpWOTwjhi40l8iCVIZsl8CUcdopeixYrltLin9ZVtiephxv%2FO0qvpxFXoDyxKMwwlQyOyG3Nn8PsH%2FmRvMYkvyh0gP3RA2hR82tnQSVRhquPGoVhVmC969anUd9KC7OEw%2B%2BmwwwY6pgH%2BXPn20g%2B%2F9mw9UAvxK%2BzmWv3j8%2FUbCUOghB5RJmWYEhFrt18Q68oNzAxEerraWXNktstX7CPfNeXx%2FZbaXnOVM96%2BJXy6rMri1NvPkwgECypHKVm9ucNk0Lu5lYipQMRXnJkPdBlixntinL7uzB8VJ%2FP8fjt6ufMX0l8Ha0a7J7zN8QqR8DeP1Eq79G8ODeX7XBAkJSAdyggsambNIII%2Fbj7V9Cqt&X-Amz-Signature=1b4c82015f49eb32e8597a6ce0d2411cd3df591fcfa0ce064748ad2dec488667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

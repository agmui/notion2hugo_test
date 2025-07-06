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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF7HJJKD%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCID83H39kM63RM5A7gXZAYf%2BtnJM%2BZclYkcj9LINC3ML8AiEAuFYFfF3U2gr6%2FK5d8HdcIiE9HQkCrQyk84R52jn%2B%2B6Iq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDPO8CbZtjqBd6S%2FjzircA7mXs7qz9pjqQC746SODoWBv29Wvc5lCGv4wgLEmUnxIvMGyWwq1jK7DXpafIJL4OlIveaZm6aoGcaZPQyct5%2BDH3kgRZUEgtpNXm%2B6bvtDdsp5%2BGc8pO1HZOs7s8oR%2FQ6I06ZXwYHVRA9LIXVxaI6DiX5576OC1jwVlAD5AyPql%2FWPcDaIfSqgzjBbqs5nJrGqxwzOb1QStjoKQdRSP4KdIMy3kxl7%2FDnnbJSzUpswQaK3uX6eTTcrqyvfJDUuubOhy%2F44lOqSUdvYkgfp%2F8c%2FufjjIyr2OBIPf3z5UBH%2B4CWpybyjCI6M62X44wzKTuajuBJx20r%2B8a7AymvwSSC%2BQq5mWy3%2FnmyOucYHxeqX1AtovoYEY%2B7lvIsB2BWYdkp3coepYLcvaBQIRCCHoEhT%2BtUeCqLE0CISy61HNnHVoHRlB6yrPUhV%2BDgCifJiUss9mMugj%2B759MoiyCM4BrYy3QJJ5pIlJejf4bbuW8pWHcf9fhZmkpGbVVFeN9yGvQcNmMd9hPpTrluwEYcOOQDbESMJbst7rd6jvIvoLIjRk83%2FdLR7xqiDPDSNHcwIxEJ0HIDWih0WuJ95D0ER8NwB9aKWi%2F9qqhX7M%2FFNjpcFmCzfrmkcW6U%2FHxwNhMLqLp8MGOqUB5uLgkvcKLKE%2FqsauSxt%2FKsC5lFLK%2FEAwlnhLoC%2BClCceitxQeBasgShbuKSlJ34XKFJuAAVRcQ1gQvfEkHfhW8upH2fDvOzSrOTbcL%2Byxofa0%2FbTgu5T7NSBLNsLyN3A0ryoQ5h4ppWaUpt%2BFpp1lhV%2BHncFEaHIEjCN1kTLdvR18bgJ1adbuCh6RW3tn2sNJW3L1LzREyYkFrpkITc4Z2XikD7d&X-Amz-Signature=42cb58f0ecfe0abdd3b32036d77c466a124b8cde9124e8ec62d3ab8614a99b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

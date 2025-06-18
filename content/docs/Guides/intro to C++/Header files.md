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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EEDN6T6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyFuiC%2FKVaScwr5iY2CqjR5M4oufJFDiiO9xjT0l%2Bc6QIgeihnET2K9VJATO%2BA48u2ivuNd5g%2FXemH7S3wLMMFK5EqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPbTyQhlvvwHCHdGyrcA%2B8GGw8PeRL4gcQ22qbMUn%2Bn06E%2F5fD7IjqfnN2ChbXPRUjG3C2WA4HOz3af0pzpasoYghBbvv59NRJHlFn50IAaAeEESwueMe92Ltrlbva4UF09GCTzJmC1cnVjkmO56VoLafKj%2BrjE8nDgt6w5BncQCE9iVFwjNYY1GUYIZXRrXEUyHxfp4MO0PRNREb%2B3ewVKC7pZdScmgB6wXtQu%2B9NB1r5qRNz%2BYggyC2E1s9W7bIOjW8849LrUVadcvF%2BmOS7NE81U8FhKmibWxNBhlG6ZKpHISIfpN0y5HW3lkc7jmQeiZvMKE%2BiiLUwOfJDxjudFUoXoaBM08UduRU3U6EWMO9i8DTgOkSOvPFaOFHf0HUlsNR8MhdGvpBZCxAHxk2VJX9NFuXLi%2BAIEzSUwf4mPR8IWxjUQ9QhTYqSChDbBrD9P4dJh95rHIu9aNZGlzZvHLQkwc11%2B4o4etEPgug8FW37HnVa6kWXfGpV1h7jVKrsgy%2FvjquBxpmwZvmNMbaojPf6%2BGI%2BzAvkBbjmn67LFa9iWy40%2FIW%2FlTXvlGaGI9ejpOsENoA1C0vGidIQ54pUPCp0Tpnmb27ltIC30vfOGI%2BeU9TCyN8kbgX%2BoRQifw43KxWcxYBO972ZYMK6jycIGOqUB42n1dj7xTJc%2FQ2PinIwuv0PkngAz2uTIvkegYABxubUTkIUuelISIiGSZVU5A%2B8oI%2FehoOjHlfWp2o6TxHi3wdUgEcUsktMCj6P44pcAn7qtD4OxIPWBdawz%2FVf9PPDIy5TtwDEsXksQerdUByAtseFgxt3LqVDIg5mAWpi6dmuiGsEoXoajQSlLlzLq50kjIPiJLT%2FNTBum4MAR3WuNQ2trBQTQ&X-Amz-Signature=f846229d3ab0cc5d4e3a30fa7aac5cd0de22f07be8d5e471f2e30d5e908bedb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL5QT4WC%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD7s%2BncLLcPCiYyMlUMZed5YFLweabkqJF9XtgqNxgcPgIgXlmFKAGAgUPrZDRtZ7JpFMKwIaqoU8yZdyFYl2dr1c4qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZm0vh8b%2F%2B%2BfOPugSrcA54cf7oF0z963LyxgwtSysRVJ2KzPmjOogv8B1sGtBH90GDxtZyV%2BUa72LsIei2xFsTDSFz6FYKVJQEhid6MA8riDNiI80r4c7q2e0k3ySbZNdKjlGgNJZRGol4uxEZg9U9G8BrJ1sxImY4YywsYOYewy9GzcIU73jgp18lHCxlC8qz4Go1lD57U3qMaQLPqkkO1zJPwnCTgPPozGgcg0dZjBPRikzK0HiZsUd6rgkffZ5%2B1gqUX1H61bPr%2B3LJWpfXbzMtayVKCuOqSdxiqLrP0B0W9MO%2B4hcEipjuY%2Bq2hvy2ve3oZomjEOLcY02sdcJJZRU33rryGGwWrtdiaQpH1PPN0gVbBxWy1uQQMPo3ucH8c7bgwBZfajaU04ERTU7Nd0CY0%2Fd8wIuUJ8j8waulvQPvFitq0EstEyZkoNjDf1oncrkp9%2B92p8I3i7wyzUm8ejmVt54tG%2Fu0Jjqmh5qxnC3hCYY6ZPnjv6wTZd8xDHiRZVSJbOEGxvuviSu%2BYzqDsP9vUsGGpLadyftR8pCP8RWFHvMQFPYgM67ws35LGLzHRg0nU1zfbI4GChQA18jPo4K9onCAuzeCq6Cj0FEZxKgnJ%2BZIlYrC5rnmaZLdxsoYOg0XIjnI5Uo0uMLnB%2BMEGOqUBR8MWWui0qznOGISws%2BfWdCuz%2FDGWBwa8zcjrTG1c46vMepDINyuClTw04189zTVwxO1UnILqxuTpbm9MFwHCtdOQ6zYwCNeNGubM0eEiFGF%2FeS0UoZpBt%2B6lt5XEoZN65Aql9%2FdkPR6gCUH76KC40XMoOjwBiB4IUJq%2BQQo1g4w0HevPeisqPDbXqGW5roc%2FizAq7hd7ELBDKuqLSJ2YVJn1SfFd&X-Amz-Signature=b9761cf1baed9b0bc90d0e675488fcd202889ed883415412aa4c68b1d9f95343&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XEF62IE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC2hfwp8z6tczBl9Xb%2FmBkF4FuOpdUZODVo61VoyyFuNwIhAMpb9hV3Mnn7q5Qk7h5zB0fV0WU0Ifp3pMXI0yptPkcNKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7zgfuqA%2Bw0rqJSmAq3AOLhOKPRJ8%2BLkcQ8kFjfDuVjt5AnLytJaa2O33BqY2FDjHXzbAUghPdJtqJ83%2BOMI2yV1iFQtDnmukEW62AiyG%2Bk3A9V%2BDB874wdFqlDBFEqWBL3ISivpiNCdKLTkTG5b%2FqMMndfWETIwZZRFrN6Lg2MY%2BGID%2Bc%2Fi2UW9AgvF8XxIIKkqfrtniaITvVboCANjpBMvqbvX0koOW%2F1KWlmABezyEUOO7E8BpcHcNcVwyCTsEDqdGRGEwaK9eTR75q0jhg1u%2FZv%2BvKdFqhCMuxhpgwZdhVMMHC%2BwSaR6NlrJSN02JB%2BWrKWLQfo78RDUW9qdHVqy3aAANnZfT8qYfj2GkS4iW%2BVX3tGWrBY%2F5RwqQIabmbe3svf9xauZ1bKwaSFXkCYkdcApqCbC9eSRYvtDgklRgM7k5EnaCX%2F36kwbgtT%2BwyFSq6BsMf9GqDymkTNAw8HFZxg9RktmKUd01djO9JAwVrVRWdVm3JZCCORXmUIkNd%2B%2BdJNudfztoBd9Qfaudb7Zt%2FcALFQ6TqbA4jZEOvu%2BbcBfGCdGNP3sJR6OL5qIcMw8IzJGQSfDcLtoJPOAJFfXXeeL4faR50G9I8nAoOM4E8uAlx2tNvhMOGhe9HQnjS9FG9NaXffg8RczDW17a%2FBjqkAWiwMLa53u6jaCfw66EGQxk5lXuIMOswWjnt%2FXqmKu1aFoEJIJR63Bw%2BUul%2BQ3H8oCnnvDPAViDwbFuRVIkUWl5%2FeQBoK2hcbFvSD9i1PpXSQqFdyBz%2FaMFoYJMaBXPmUbvP%2B9TMHWpZLG9OVOXAvE8G2x4b9oreVL8lgTOy4vH7y9Dbhtv8%2BupgKOl6Z7eeJicvuH6IlrKBvhhd4dHT2004yoUu&X-Amz-Signature=53b64e6aa82318310ebe013fe81134f17d4dd68bf4bcb03fc13392990b06ae19&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

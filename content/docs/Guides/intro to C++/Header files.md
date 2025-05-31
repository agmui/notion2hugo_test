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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654VG6SIL%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAXxkkw2%2BQnIXG9IsU%2B%2Bf1aR4Mn8j6PDjVjATvf6RvzAiEA5DkGNwCtl1tn6iFH5DeHmYpGH0Su1bEondHBtDZ65ecqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfXlRO3%2B1d1Vb08LSrcA7teyyUmJEdoNyz2JekjrYW1X5KVjDZk3QZ0dBFxzFqQQZfT1n9IfXDBIuIs3SYzYTSt1NngrsfAlaHBhS4YHKpKzmXObvdgptCqgwRcT4nkcJGMEZLtkgQxA5Cj%2BWvz4qDzdgC1f7NoIahTTgVlgBcCzEckr1GRHHCimYxghn9IvGo3I445Q%2F5OiYSAirGC3EJUK4VyBlIrSAnZNHy6Y4mhiGBnrCT38Kob3t4pKyjPvFl0o9vHctuMMGjkRaHumeScucHDd5tK0ecCCm7Uivw7HTdJzlLxGI12AApaU2wZcfE4AIwvm6NrMl%2FCebVjsXJRo7sMM1pwbITAZ%2BAGLJn7HpkdFKILa%2FcovZYPqBUBafVvcfI28PgSoAFkmS96xSWxew%2Bm2BwPjTpMbsIIBdmaRabM37Ink2Wl%2B8hyU9qgmARD7skx7Q8OQ9n1oBivW6uK9z7sexx5TY9tPeziadD1SmySTvWtcSXeXl47oFJq8n1VNpuKWB0PU0wS%2F0sT6QWfm9lcNafiSKQ%2BYtz4cu8pTgiSnCSXApxGVYPAOf0rQIOxfn4IWmdI1RZ%2F%2BNCNJzHPuRg3aJUG7C16VxtE4fWkD69JT6c2fER96rMTzmIK%2FZ%2FD3aXFuZB6CQwdMO3k6cEGOqUBzRq6chzC2IXIgvwSZOG7D%2FHz6XfBJKTl%2ByjVw9g6VSoaLEhh6AOWL5hCc0FbhFZj51djE8P%2Bl81S%2BrIymtwoGlW9Fo3rE%2F956nj8YI1EYs91%2F6cvbDr4Sw87foffgnLwxo%2FoIAEIwK0lfjZcAi8%2BwCF%2B990IJxvMQgYGy95YMsbXEUI8rovD5rCrkqKiTXLYi1X3FG13UGZbZ3uLQfkq6M3JHVCy&X-Amz-Signature=5c8dbe0e43763599f69cf54bd1ad34b08201627fd3be9b07a415edc6f0e7fd3b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

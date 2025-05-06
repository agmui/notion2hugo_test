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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ELVYDLA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgualh0RWSvoRxcI%2FAmkbdPE88zdDD0Vy%2Fu6W34v1DEwIgXRzfsdvLFYrQtOs2z%2BNtML8vMpDEKFZ9KlFsR8IKs0Uq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJgcdYyIGM%2BLNVWFDCrcA7PtBfo6UFhK3hcslXACQ%2FVTVqo8cdyyJZGQqiIvIbaiT4HU%2BPfyG%2B7l0Aotq2WQQiImWbXK7hhRC7DJCPBaFk3Trxy2JhN7IsyadYRF%2FvEmLV8hHs0mxKm6AhofalxD%2FkzxtBuD0ok1gFuXuz9bpGabCVnrfF4JcfrI3nkCWaNeSzE4QgX0C%2BVXs0uy9XbPUERizpBDQ98V%2B0HMa4%2FkySn7trFHUqVdZuT8EOxMve2rTABw29icNVxPKEiqxF8%2FhqatT5s5op8Kh2tZKeifIdzTQJC2nnSSEZ4dzMgcqQW8cp1wNq9leK%2B%2FGgzqq5rsWN7nQIrn5ZTwUeTed958y7mO7Cjs9iucJKS6rF2lJ8xbnpJL47EhgyVCL7UAg4i0uxJueCDdDQXH9WW%2ByAky3jg5D06KcFKoG7Q74D9%2BrWg19cFEnnXtLWwQ7ekMz0wp%2FkCRQlJsAYD%2FIqdC5haM8XnMMcYWjK27yD5o%2BhCHw8tCfc0gYqxg7JIrLRgMKD00eQf3trQB6JgHUdi0c8LiR7gNNPH3PV3v8OoW9ZBwmFHyHQJp8Q4FPSQevThl7AIiV6hgpqTunRJnU1BAv5%2FoQ8dD683Ko06qYK4xrmDYgA74nRrgdiOs%2BRHiYwmFMJGL58AGOqUBkp2fzVjLFM%2BUWocw8CLOQG%2BMnIDj5IBqXs9GBeaNGEcN53wTdZ1WDvEQs9OPzx%2FZLJBh2AwNOXKJX62era%2Bc4okthnaN6tmMdS1HvuWfmKNEEXLm%2FKeRVBqFpj3PTSP3tRUsj96ZUeJMxPU6Nyv5YvWqGQeYIdTVVSsW1NCoRSYtcKIyOYtztQYYwKNWf%2F0Tgo2Uz36jh0LtiTHQBPQTpEdhB1Ox&X-Amz-Signature=01ec72b9dc45b270ee4b0973e5c91bb5b30e296f66b150daa527be9b7e2bfeee&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

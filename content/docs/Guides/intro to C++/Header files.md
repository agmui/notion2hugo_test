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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCXA3VEU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDC2skUhMGhuSLeT5k4IFxcDstP2ZVA9azxWtKtA0wHSAiEA1YcjVFetDiar9fLz8MndeOd408BEj1awIG0hpjD8k%2Foq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDP8Mf8W7IxT0Gix1GCrcA8y%2FDPn8IJ6hUw1%2B6b2qKTVZhwLSUrnwcQKcoPqdJLlkf46Kx0P95KHpHNDB2Uy3PEdKseOFmHs881qC02%2BBmhEHTFlFgqUSlp80O8cR7L2kR7i%2FOJwDbg4IMGGbY4jItj%2Bm4j7sM5DdkXgeUtocmhaEz7cNPOi2dKFxl8uPkcbPuGazjhVX4vncoNLeENJKk79VR7fA%2BHRBd5JWjSByx5S3Elg5Fl2B1G8W5G3nwR7YV8OVmYs85PyqnOGkD8ygBMYhqOQ61o%2BqZBSnNAoef3ZklugmkzrtjIOhkv6n8ZONuy6YJRYO0phitWTF5r09Nzb%2BAqqGgLQ4AuHm8jCEBGjOzfEhcD4XuCGWRViU9LGNujXWizrsxj0wjltzjKWLML68j7xqmmuDVRgOHN9jwI5V%2Ff5h79mUO1Kd0mmzSS8XO1uXW9bOk2gzQE63LOv3pvrjYAC16iToyCfEpQyfG6rf56Ng9nCFn8Dpm81U2fdpQvxFBwaAUNtfzclugci3q8d1Dowfd8Q3Y7zzG0qjhHe8q6l4mfzVDD3SFZYxjTMkgJOlhWuO4VcINsnmeMXSWTEskoGUoHFfBU3mX6Q5eIbaqRLrFh4hBMjhVz2smVNMNv4EEpY5vO6k%2FtEDMM7W5L4GOqUBEEsyQd3LgiJoPv4U9H0K7mFQxlX4EzG6YQGyPkHFOnmKpzmAvXD2FKOk%2FTKQIpssYx0ylVwR%2Fuq5Au6uCRNSXDDQUNSnreYtnvvIVN3L2JZ%2Fgx5OhkxX03XpcfNM8TOJqV9bXGhgFcbo2bKGjfiKRBhfHTyPGGvJotBMGWv%2F3CU1dQWNz5zTp5kZGjktn3gvx3vQsANoo73D6lsXqxgSbUFfFHTN&X-Amz-Signature=842ee6e13a2652de7069550148fe5b0d02f2c17cdbfdc67dcbf57801a759dd12&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

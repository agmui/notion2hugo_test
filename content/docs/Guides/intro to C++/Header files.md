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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DDGIFFW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFqd%2FB8tjY0ymOfjlKbic6SmuUxFHSuFUwOvSQl7kgiAIhALfqdQP%2BjpS95BM4xwyqgAL867emAKCXnqmz%2F0ezvgdKKv8DCHEQABoMNjM3NDIzMTgzODA1Igwy3uick3rDQqXBTgQq3APpLeEoRemkuUyICkAA0DihCu84mmHU7wW%2BBFwPpoAIwJ2DrYTQp0IP%2Ba%2BhHwI0b1LfWnhRLh2uLBUTbLM%2FadxTruv0IOcTiN7LHXC5f0bvg3GmKKX2gWSVJzNemM2ACDy1UPXeEjAlgfNM%2Ft622A6UfSQyFnUL4VLEFJIuVc4zCkBQi%2FA5tR6RcTTAdOsUmGyEVnJxUhp378Dkq%2BbFGv2UrECg3BkfFiTBtv5A3eTjbQJWJ2d3ijYnv64hr8ifnjnzGEpP%2FuyZhhafLslkDwe6RL0BIAvGL%2FH9%2B4IomYQRgatF86JBjgNw2TABWKhc3UYQ1tlvLigxxF8cldXPVE5B67%2FHDG8bhcwStjCHn8dG1F6ZEuXz9X78Xlk43bSTxvTeOonkUykPj6VEuzREAnOSSuFd4GzAEO0LXGJuKg3NB8uPpqT3RCddrZHWh3hJqWeMsO7AXdim9Zs9BsSjYkYBAyVz4UJu3z0RZqIhIT6fSYAAYHgV%2BieGTquVp5dBAajn8ZDa6LHT0z3u1CJUcupMV8Q4gbbqPgRn59N5j1M3rkY5rhUIN04CORPnaWW7%2FM7uRAWT9bpNq7gY9qQ5ajXrfqhmC6%2BMxQEDFlNXCHbrTGWamf04B4mYm69x1TDvnqbBBjqkAa7MPWbVzeqxnvCBf%2FOxS4COlgQ5P7MqgUtFgEgalsrgbKMEi7PKJ7k3B%2BunmiE5sgAGVz%2FEx3b1pNQdYh94s70cJqP74MpjMKGCfHBQybVI1adMSIDNQHQKGcdq%2BQSiiZ9O0BuED%2Fdj7TUpiSi9Ielj4thXVFQ44HZnJoWzajBDbbTQNtc%2ByfXw1AvWQp6YP9ys88Ml0HwqbM7SKdRAPPWfj%2FuU&X-Amz-Signature=e9ae0f77019383fbd5812594e1a625ca87e081eee042e82383c810b2aa2aa1fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "null/Guides/intro to C++/Header files.md"
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U76RG5X%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJFMEMCIAoyRQpNKi%2BTZMWIGmu4kRZYkb1KDj4iP18J9rNr8A6kAh96cAwzlJtGVcGThzsxc5iht%2FXq6KjITQOWadoi6OuUKv8DCEAQABoMNjM3NDIzMTgzODA1Igw%2BN9EDxILLrwQTMqoq3ANFm%2BqYwWiV2Vge5oEZLtKSkZm8pQHdJAsb%2Fi97vKPmSlaAdPwS%2FYEMRsM5sdZOIk0vzIPdoTqzFt%2F93iBE9LPNvrNhYkpNlV3kRhtm6atv3hUteSpDaNUeZuKB6pBV50%2FE5rwCJ9l9qQj%2BDjcSw6Vg4hk6TvdCIyOz%2BpNMUQ3Ub32a9Ww48JpoGVKZI%2B16ZvoGqvxJCw0pYvY5UInSjgrMiieESjzJN5bH7EQeBq%2B2tK4zR7WsCiECYiy6tVGZKIxgOAbKKiSD92Q%2Fy%2BYoBf%2B2w5oj7UYW4%2FvdAK%2BPmiQJqHOC%2BgvzONn3%2BgbnOh%2F8f1ly%2BypZ2z9rcOkQWTNLvDVkJ487%2BHyvGauEsSXHyLdj56%2B5zkjpHLFhbYBgLHS2sWN%2BFcvkw4vzP3w9LcIxM5rvnmspa%2BN5teTc4tErvaZyP5I%2FkYiHMsx6PFlLeDIM8HK1GxqkuYSE0YuWm5FYei1qMlZj0t4Dg0Z8X1LwZW000NZ%2Fq1XkR8w0ufCVEfBUtKEEPQlhojtiYQ3b%2B7Am58tQZr77HW5njcvjiY%2BuYWlNGDMssTrd3Xi%2Ba5J%2Fw0e2U8rakc5ZQqOeZAcY5ulLj9%2BEceJHOsz2TqDlAWJHwCnAAqr058SNhHXlzq6hKzCBl4y9BjqnAUvsalvF9mNYEVtZpz3XgMd9%2Fu%2BscqH0vyhGH0m4oZprsyiY6O1HQLIIytAlUE33Dq%2BIs9dld2wQcML8rjc34VOd5utuQq01oNTVae3Ewagm%2Fq3MYhBOZWwrS01ttCP1KlTYb0YeEt8k6JuHW7d3udJJ9wKKtDQQxSGbeZisFw7h%2BzpsFKi1nwLfdkwgVxJ8tm8sJkRiOs1TVXAiUEQMdnA34tdeVTqQ&X-Amz-Signature=5321bf72950bb137452da28bdc01fc5aa2633c29a37c2b47d475bb3db26d8689&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

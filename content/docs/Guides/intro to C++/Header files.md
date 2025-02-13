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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QQ5QZ47%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl%2FtJpBi3y8kJvxTfAGpIqQsSIvAfADjF%2FVQaOcCfwuwIgGDZ5T%2BHnrUH8QkLIHWgUNZVEKJ38h3GksXoHcLdZib0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFdGa11jXgMG5l81JCrcAzDcDntFfJDz9oNz5%2F1OolhuM9FN%2BX1fjJMLt3cUfvXisNqHo6P7Dyrnb5edCwSZcTjS5AkGpD7P1muO%2BstVLA085p2bS8CGoDaoaTIf1FFvCp6TOWZ9f35SbWxoQqB7xLNXDpNHrkZu43REBJSiRYdTMDQwaPTNyYdxw10hAN9fLFKYiE8I17gqVEYpj2n5TGGn6RuvPUNBSRxa2d1TXwgMHAe6XpNPZNkxMuXR3wEQT9ZfuB4onAjtjyKH8iqY0jKQ6i5ni7wVhD2RKpcDt5jLbFjsfJMNyr7v2E5VsvIPfxyRKYPkHlxOzqh06LHHmXabiyu%2FPxEJQqtr%2BY66A1FiIkPLNPILEJk%2BGASxuYHModXcgQqHYGK01hQYFHjpZPZBbBvciNYyCLDjQQ%2FYo%2B7XR75UYhWmgOFqc2POtt8CNu2KelzGFqzv8y2SdZKgCVh263rpsJVSzwaSiAAAZVT5EAgb%2Bclgk%2FBl3QVOcqQHcaGKhYSDEQamuNGwqEjEA7hMiGl9Wmcfwizo%2BEGzNKZZuoDEh93hJpn0RglvRNEfOiwQS%2FKVowpodm4sOoZAHWSbYT8zxyj0nomK0hQVJXWn4tNdStUoJ8UBCwAunmZqStooJumjDcfgVOCRMK7dt70GOqUBXSWKncOmVZEoKE7rJdysvtv907jbW96NLUNTXKZ2%2FjjHC8PeRzHEj%2FJBFeWRq4LPLe2rkDjV2HPFTxAwKmtDKsQjJKIwHg5QN0KwdwfwZG0Qvx%2BGfvJO0tMY8%2FVpqiM43SkC%2FH2fXadwjJUifAy%2B1avW9Ie8jOof0xzDXx8WKOGSY9W5YfMZBvhjSEW%2Byc8WToix3iRe%2BEE3V4piPhifSA7ZEMyz&X-Amz-Signature=128f153c137e818e3efbac24c8e09b7ff2925484f12504f15b0225272119e334&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

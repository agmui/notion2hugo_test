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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYJ465SL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgDXgli6X4wbbeYQxoXi9C1WYLaFGpr8gN7hqyTao3twIhAMCJ%2FaLfvkAUN8TGThnE%2FRhQFOgQ639d9euPfuI29HKtKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAqonhG34nYs9m4v8q3AMchKa2ts%2F1xAvdCCNYybjwd71BNQNkfHBnABG6mJHGRi%2F94NQkCMpjkiZ3voptP1DSfXQyO5I2Sivlh9g%2B8DaiK%2FMTjPo5Kah%2BG7mBScH9cgvORwz%2BfVEx6uwG1jqKeDAlOcKQ3s2HZCYexjQmNe6uf0llUOiBVswsPGzJCxqyj0i1ZzN7rTFf0QMkPNWJzzZdkskKzEKo3YTzYB5k8uY6F1t7Sk2MfYMqmfTRvmJacNy6Q4sL14DOR4afSqcIB5R9D8T4BTouyut%2BUxawW4sesA%2FgRVT2rVNL5x1zB6dcFYJDAUEz2C6jODoSLKXXQ0bRmSvh7GvzpgTI0QNjimAQd56dIAwyGIUPQmcjUuETjyBaGllPbd8mWcRw51yiVZY%2FzU7mb2JEghouhYt%2FAvjNz22eC0HExzicwGkGx94dQt2grK96nkWycdxONoOrQVSndFzehO0lkiVSEr2Z60AJsRAp3dTbHeWgiwr5sES0waiz4sF7J4dpuOXKc3oBQCS07Z5%2B%2F4LZ896Tw%2FskGPajDD3CEie6SpVwU9bkHHG5wfH%2BmTYRVmiPXsJ57fUM308j7MXKi%2Bzhly2lXR05nCIVG2h9FsleyqodsVHrIlR1%2F9MdUG3cK9F3HsA3OjC8oqrEBjqkATsolfQdXFOyVKLDv%2F5h893QxGQYYv7NslSwZ8XF996h0%2Bphut0T8KnTrtFBx3vJgnr%2BHWKqJEgvwSi6tp%2FcSPshDEzpolbZ3nOpwfehHwIGT%2FS0Pj1NP8Gt6wGy7nl3tJu1FdOP39jRdER5ouKAnHIxXBfg6zwYS5Kx2YmEhCZlnU3N8KDbIq3H2I4DHuUm0%2FSUzQPmG8hn0wVL0kceXgVk5LBl&X-Amz-Signature=b25ee71798fb6b89a350eb976abf2ce5149071bfdeaaee15fc4bad4b94d59394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

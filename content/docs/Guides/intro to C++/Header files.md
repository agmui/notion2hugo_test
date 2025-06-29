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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B5K54KO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzR8zSHzg3bAE00%2BkawNnx%2FSjXDPoX%2FITFV0iwV%2FTJqAiEA9UfLJdlKp9RlFGDmf36SfER7JDzLpf90HEHN0badRPkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR2BtvtTDtE%2FiGO2CrcA60v5pUPMfVHXQcYnCEC5iO2tXi2RjFyaDjhqScBLuoK1xR%2F9qgUGXpcjsPjmmf9rLRQ4bRfJM8cviX8sE8jXkjEHZSccPliqlL4HexokBmsvVVbOQByIfjX0ZT38nziT%2BafVJxg6Syp2ZOzxj4RnGQHpJmUgnUNV2RSrgb7JFo%2FtL5d9zI7umA3iwYFLZMz7ilXt0MNAwmhKzQGWrMbmyUnefaY09bEYhN7rTr7oGa2RNZPB3hO27db9m9F%2Fp55PF8elpStVP5GGNLqdssVHJd9DqbMRf0VAjPqvEl2mte%2By5rHik4acOzhc5zwZ2V6HX9%2BaWdG9SNwvC9qrdyGJIX76EGXFThcqNLjJZF%2BH3CNVhYL0KyFifku7S5WqU4uSRfj6yrR%2FfNYztmKfQI8GyJoQ9CFFOymUAPZt5J2VM6nXYr%2BogUcjDxxhTass90TlNDqd%2FDrHxS1OgZgXhOsvph6wGXrcx7s9ZviN1rrEqDsQYh5SPl6oewQUAD7LP%2BRupiDiPnr4crRKd0GE8F9Tt4nJpJltlhNfNwQf4z9ntojWspS5EtNEdM6HQpcs%2BuXChobK2qF8EbNgfXaqi73TaYeb0CaJ5OF6ZwRzZ9bkv4L52LfLyIBfT6ME2B6MNC7hMMGOqUB2Ci4MT3jwgOFghqArXnZ6ibx9jLqppSnLUcubcPsxWct7TFHiHvZAlySr7RyWji9yU%2FrNQ0zS3jcMWWmkz0IvF816ClSXZYOQG%2BxQXbAlhi%2FeOLWnj7Zhdm3tXemL6AZsgZCkb9i7YuLJESLyBtBAaOzqgdP6jk%2BmhZQjqF0GdLxXBK6q6BdIjBtwSb9AhyOD2RUX%2FXx%2B%2FEYY2BjJOVW19YYcMb2&X-Amz-Signature=4b5efc0bd0ca568f946282c994757e745636304f334788923cd88522041dbf5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

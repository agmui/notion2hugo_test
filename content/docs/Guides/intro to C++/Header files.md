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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHA2NOH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCNEnPLPADwl%2Frv3YOe97R47O4cXfmdnXWBL%2BEx8obyggIhAKlgfAJZCJ%2FrhaXKMWlrw6n3dNF%2FLkNI2E5998kuhtv1KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnHFhCgq%2Bw9PAnQUsq3ANM7UgoFdeUn6TSZNmu0XVbAXoTrKFSzmxkmXtsAfaHfTRKwuiwovWn%2FKREu40WkvwHhM7K6gG2ScEJY5pRrDBDBIBAh6%2BQmeTMxueEHjFtF2lg0RgF0oRvvxqFaOwv2Gv8H%2F9EfJz%2BqQ8pxb8KocL%2Bnl3K9aiNqrySJSxbe%2BYs2ilROpaVpipXfAIEY4VsN14UXJ4FDD2TJDQneDnctvzEtJYvz8fWiM8BcO7wljcIlr9Qb1dXZsrheTdOO0or1YMVY7GBhEB5sCqae7VXAthMU2s1xXPM3RJhmb6iP%2FE%2B5WHozjBQsV387LFMnf3KyeNS%2BhsyKNPU4IxrRnUmka4MA9exaF91Q9na2OD86guepC062eWo5YCkVbBBd%2BJpx2K6cXgpkGK0QDeamse%2Fzot41%2FBDRpyShjAGQMt9gBjvb1%2FOjfNFWi91LeFLeIv3gxNso6O1%2BFmNNe8aNUFh77Ji65URr74o7uPSwpKZbckfZPzbMRgP4x0uvd2WahI0YU4t8hR7sh6fIeKILc72W5JnEl5ZLAbw%2F7p%2F%2BBkBnXei%2BFwtpuDQWWzhsQe94SZQyGwZ%2FRGD3K3rpEhBukU%2Bh%2BQ2G9Wh1lH%2BuGko%2FmfaIFWUzcZ8GsJS086DGJbNeDDZseO%2FBjqkAVfJu1RNwDEtqRqHGhmRWRaCKdZWoOTyT7n5RiHAGBhbuBvVEKN98xW%2FaozSERkqHcAh5Ep2F3kPiDB0xaTxqxGTWPDPhSdvrMnxMheOvRkXBsnMD3BcpV5CwIQEaceuiOJVhRlyi7lOi7lHhCxUR1RRuH%2BFjMRJ4hD70d9CfGGG9FoKN1pMLeUnFsunGcM3OUAc8gr5qb5hV9Kdocp6P6BU3fyc&X-Amz-Signature=2f801f1a17deeb931f88e13ee61ab33a8eeab87cdf1aff69870edddf18d3661f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

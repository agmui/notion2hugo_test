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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZRXQQNV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl0FKu0z%2FYWHmjG66C5mW7l0%2B1fGmvA%2FimvJro82XM%2BgIhAMZxqZP3mBlUf1R5faK76NplvZdwf1R4aoc8Z5c71bklKv8DCDwQABoMNjM3NDIzMTgzODA1IgwC8TZEOOfjAepGRlQq3AOgmC4qyJ6D7NrbKGS92cSGz58Ok1TNgblMoA4sMsNTrznw%2BS6BYfkLOar5w%2BHvNIk12%2B0KmdUXFlLXOHj08LDUqDLQ%2FAXMAUQNE%2F75Ga3QfqIYclKdel3QoWozeHdFpEhAPROpXof0HQJq%2FBKE9fmUbyD9DU8GbkC6xdYw8xtpM9mZRlGrYsIkEhZUg%2FERBR3qv7eP%2Biiw1Wp9mWZaer3Ig9fuXptPr8i%2FU0oKw8IKUkvM4s8DcylTsdtN5NXlkdAplXJngsTU4yrDrtMHq8uUm1yfNfDkHC8DcVXO3mrM4mJW3K%2FhhomWRrDqnmcfXuF%2BjfFq62l6cJFkLo8bEa79YEHQs5l80VWRkVYprZfwf9LKGP3EcpT%2FTHhh3H%2Bu4eNR8RHBjhXsRo6ot9sqlJxsxBV0XXIvvkTryPAcLnLo%2FvVUxvHeBVQu5YEjdzauypJ2AXf%2BrGWBdhRDugjpw1IYAbtXinB%2FkQJiPTKG7guduquw8m0wB%2FJJAhlyOND9LF2nO5VoQih3mo0GLbCqQvrP6iHNjUezmoCkJJx3ZJ8jtGQJoraJLzrCCgejGIXpISj9f2AtW0IXdDiEz5L9myQm%2Bt0ilqDZHqYGObk02ZO7WZCKaoHgcQIMF9nQpzC%2FjbHABjqkAVWfXr6oCG8NL%2FCKqFo3bptAH66S1TMRmhaL8mDP1cXTUMM61OrJ22XhdXhyPc%2FmVYl8fQM8NJdWEG5bMEsE83Md26F8DPVoQoH05hAxHVESJQ7upmlCmi%2FLgsY5P4D9fqla6xtSpxRROgGeLKEgsbSUJ1%2BgyFmw7Nh1fwNdTg62En6DNz6tpKQtaoyJReGWzY6kX%2BtzALiNhGwgRGhKWM6pj2s3&X-Amz-Signature=40f19898a58417556ea74ff648e2a82e6bee402336e81bb7d4ce1c5b0486cda0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)

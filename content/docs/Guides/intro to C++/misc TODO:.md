---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ROHYRIL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuI4wE1DUeQfRdElm6Tz0pOvmEwqCOkaPCGedayeZbEgIhANfStntVRt4UtjJl0fa8zu9J5Esko3bXjyIaW0DMLO19Kv8DCBoQABoMNjM3NDIzMTgzODA1Igzr48qN%2F1535VU6U2Uq3AOr25qdelC%2F4S1Uxg4zfjOFrBuLskTPxrtQY%2BUM8NTY3QfqwjalLdbqxUWnbhch8Ql6tZDP7xbi3E0q989%2BKfcKc06uw%2FmuJuwtDQniV0C9l9AhvG1qiF4pdJCgAfdDxO7JfD3CWGu0HQLeIlAnCvv9H7K51t3MDDC8tNVZPXBqZVnsggbq0v2Czv936HsFKkcjoNth1D5j2MVqcxCBW52tNVQFH0vfdupn%2Fr4jReQ7FpaQB9FZscAA5qjosk%2BJw74AtjRrBafAm6LiJZxlwkkTBf54bzt1NXXFdwRvtxDo0GXLAzqdqDOicgAWsqbjLbz50IgVnCVUg%2FqJEmGi8bbIMPKLRMzSe3MSlSNNx2GtC6sVze9VVrVFPi5Lpl0wAQ4OwUrLO7v46w5AvA51iP35oGQ9GVoGF0HH4dGCllTVcmjx%2B%2BYh3ol6ORygEwD5pyJtHmYrt3UJznFPAJfA2LfLt7xFdDTpiglVoCu6AirVbROIfwNpiNWxif8Q8AlqD5BdXVZERFrmVavSp23jd5Hg%2FyU2YkKUwOa4Ua4RarGOFOZhAYwOK4zooZJD0iwJgUE3OAeXUKb7qoIY%2F%2BOTJ%2Fmhk8N5VJfjfsuPgLncSJpdEa31ed4bm9bsUWNREjC2vri9BjqkASx6h9TUpSHkWTSkGMCM87N%2F5qdEEpnpk8WkGt%2FBLH%2FHhgvYMHl9%2B7Y9qPeoN4Uq3Z%2FcJRKdy0AWObyXGvSqfBvb0VPUD6%2BuxaNQA911c0cVAGSpFyQ%2Bd5S2U0tS3hN9JasjqtFBQueKValzwPBRuMLXTlK2p5rT4b576TT%2FyZc%2BMSgunEZr7MJE1Q4lEj8yhhOlsqfKkXC%2BJpxB9yvhRjNl%2BX7G&X-Amz-Signature=4be0308e3bd3d79f51df1e4f1a904aec0395e3e442aa637ed5f5e7e6ec786a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ROHYRIL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuI4wE1DUeQfRdElm6Tz0pOvmEwqCOkaPCGedayeZbEgIhANfStntVRt4UtjJl0fa8zu9J5Esko3bXjyIaW0DMLO19Kv8DCBoQABoMNjM3NDIzMTgzODA1Igzr48qN%2F1535VU6U2Uq3AOr25qdelC%2F4S1Uxg4zfjOFrBuLskTPxrtQY%2BUM8NTY3QfqwjalLdbqxUWnbhch8Ql6tZDP7xbi3E0q989%2BKfcKc06uw%2FmuJuwtDQniV0C9l9AhvG1qiF4pdJCgAfdDxO7JfD3CWGu0HQLeIlAnCvv9H7K51t3MDDC8tNVZPXBqZVnsggbq0v2Czv936HsFKkcjoNth1D5j2MVqcxCBW52tNVQFH0vfdupn%2Fr4jReQ7FpaQB9FZscAA5qjosk%2BJw74AtjRrBafAm6LiJZxlwkkTBf54bzt1NXXFdwRvtxDo0GXLAzqdqDOicgAWsqbjLbz50IgVnCVUg%2FqJEmGi8bbIMPKLRMzSe3MSlSNNx2GtC6sVze9VVrVFPi5Lpl0wAQ4OwUrLO7v46w5AvA51iP35oGQ9GVoGF0HH4dGCllTVcmjx%2B%2BYh3ol6ORygEwD5pyJtHmYrt3UJznFPAJfA2LfLt7xFdDTpiglVoCu6AirVbROIfwNpiNWxif8Q8AlqD5BdXVZERFrmVavSp23jd5Hg%2FyU2YkKUwOa4Ua4RarGOFOZhAYwOK4zooZJD0iwJgUE3OAeXUKb7qoIY%2F%2BOTJ%2Fmhk8N5VJfjfsuPgLncSJpdEa31ed4bm9bsUWNREjC2vri9BjqkASx6h9TUpSHkWTSkGMCM87N%2F5qdEEpnpk8WkGt%2FBLH%2FHhgvYMHl9%2B7Y9qPeoN4Uq3Z%2FcJRKdy0AWObyXGvSqfBvb0VPUD6%2BuxaNQA911c0cVAGSpFyQ%2Bd5S2U0tS3hN9JasjqtFBQueKValzwPBRuMLXTlK2p5rT4b576TT%2FyZc%2BMSgunEZr7MJE1Q4lEj8yhhOlsqfKkXC%2BJpxB9yvhRjNl%2BX7G&X-Amz-Signature=7a3b23de59509b897e309a5e7bb4940332eb1959d8f6325917d1ee7ce418c573&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.

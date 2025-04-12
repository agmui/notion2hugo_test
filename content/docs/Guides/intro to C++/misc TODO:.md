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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKX2EVYL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDSM0LVC99imY4Azoed6a0AeIzLYPyIUVqvDcNxFqGLAwIhAIoXOyEdzqNSSPMiKPSAQSjjNVLVB1uLS19n26Ko%2FtW9KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqw3em7WwtP39ahCUq3ANEZ4irf0eS5MTJiKc1UdruyCCjr6tQDbrQAMbJABLv3AKMG9Ee1NUAtC3kD9xIbu%2B%2FPUeVvaIay7CcnAiNjO0CNZcu9x9fFqwhEgwdZyLxQt%2BIgBArSKxWMLAluIaFWYHKI2sAinoK0XHsS6ExTb7%2F9kXTDprxnGQ4K983sBmNP%2FK%2Fxd8a4qx%2FG8zRw4LpiIDxahq%2BwWca9zeJuZ1y%2B7xlrlj1s%2BYEGIZftYCZu5RCrVEjasAl57hQtSdCbr8HN%2FylCuD%2FmlhYSPJ3KdRvhLJsjgfkkgqIWhRlMkUCBPGq4dxCgV%2Bucxdk6h9JaW9es2r9uKrzRss5%2FBEjh6Eq7cVzZQ%2Ftxu%2BomouoxfFbcgicTQ%2FlhMXkyzkQXaRstOgBAXYv09oo2MB5%2BQvMuYogGFGXf6fm1xe7TyIh14iA2s190KbSGKot%2BKPkPnwsedIzJJ1KqbuqbvEZAiWmY79dquu6dd%2Fq%2BghN78QgHtKuJM08G4bwNu7Q6mZ14PmoWmSnyyOh7KX4up3W5fPgsYNh%2BCqeqtZ1JFHVFcS2WcDS67v%2F9vuU%2FT1w2KBHbP8kAKEjuw3nM8HTW1rk3nzFqnkufgGA%2FYzO2jp%2BSUyH5TqcPMno%2FA9HFoUvUm62b%2FUo4TCNqOi%2FBjqkAQd5QQpkJ0gWxTaahh%2FqbrPSY3zS2FVl%2BTzzAOOQSNx3MUk5%2F%2BFkR2q%2Bi0PF%2Bt4ci18A%2B7%2ByiERRH42hrbudgPQN0uc%2Fr2Wq4T2ZX7ofhkJBMuzpHMjDMZDgzFPvfXi5dTA093E08RwP5WGZgwvFH%2Fmt1vqoec0PQcNgeZm527wRyCNp4KFdSmjXgVDgfHd%2BfPZDqQxiYQfffQ3681BnuR33luXB&X-Amz-Signature=0b09cd853e635dbcffcb3d1d01e817373f281a73ee22b4ce19a43e484f74af04&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKX2EVYL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDSM0LVC99imY4Azoed6a0AeIzLYPyIUVqvDcNxFqGLAwIhAIoXOyEdzqNSSPMiKPSAQSjjNVLVB1uLS19n26Ko%2FtW9KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqw3em7WwtP39ahCUq3ANEZ4irf0eS5MTJiKc1UdruyCCjr6tQDbrQAMbJABLv3AKMG9Ee1NUAtC3kD9xIbu%2B%2FPUeVvaIay7CcnAiNjO0CNZcu9x9fFqwhEgwdZyLxQt%2BIgBArSKxWMLAluIaFWYHKI2sAinoK0XHsS6ExTb7%2F9kXTDprxnGQ4K983sBmNP%2FK%2Fxd8a4qx%2FG8zRw4LpiIDxahq%2BwWca9zeJuZ1y%2B7xlrlj1s%2BYEGIZftYCZu5RCrVEjasAl57hQtSdCbr8HN%2FylCuD%2FmlhYSPJ3KdRvhLJsjgfkkgqIWhRlMkUCBPGq4dxCgV%2Bucxdk6h9JaW9es2r9uKrzRss5%2FBEjh6Eq7cVzZQ%2Ftxu%2BomouoxfFbcgicTQ%2FlhMXkyzkQXaRstOgBAXYv09oo2MB5%2BQvMuYogGFGXf6fm1xe7TyIh14iA2s190KbSGKot%2BKPkPnwsedIzJJ1KqbuqbvEZAiWmY79dquu6dd%2Fq%2BghN78QgHtKuJM08G4bwNu7Q6mZ14PmoWmSnyyOh7KX4up3W5fPgsYNh%2BCqeqtZ1JFHVFcS2WcDS67v%2F9vuU%2FT1w2KBHbP8kAKEjuw3nM8HTW1rk3nzFqnkufgGA%2FYzO2jp%2BSUyH5TqcPMno%2FA9HFoUvUm62b%2FUo4TCNqOi%2FBjqkAQd5QQpkJ0gWxTaahh%2FqbrPSY3zS2FVl%2BTzzAOOQSNx3MUk5%2F%2BFkR2q%2Bi0PF%2Bt4ci18A%2B7%2ByiERRH42hrbudgPQN0uc%2Fr2Wq4T2ZX7ofhkJBMuzpHMjDMZDgzFPvfXi5dTA093E08RwP5WGZgwvFH%2Fmt1vqoec0PQcNgeZm527wRyCNp4KFdSmjXgVDgfHd%2BfPZDqQxiYQfffQ3681BnuR33luXB&X-Amz-Signature=bf37b48419070f8864aac8fab92efe6543bb0851de32bcacc9f66f000bd06974&X-Amz-SignedHeaders=host&x-id=GetObject)

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

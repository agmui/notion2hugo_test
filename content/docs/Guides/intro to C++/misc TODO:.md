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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REESVR7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCwLEfAoPo0hnGhsudmnk9LOLpWsEXi%2BeP7N3oqv0KWgwIhAKC95QcFRh%2FMav6KFLKwj%2B0K32PCLHuRNfj4%2FdWlnevLKv8DCGcQABoMNjM3NDIzMTgzODA1Igx8hwKnfq4rHsBlC90q3AMsrb%2FhtfjAsP%2BPjMRGUy3k5a7XGCSD9vhVbkXsTJHDrzZxKm0ZAKmLrvTWYz5IrC1HnKBr8LQi6QOBvTcbnD90H4VFiruVDX7jTfe1sKimCzdIbjx6ZPLm8FZypXMXbAPavSgta7%2BjNljlO7sq%2F7bo6C2VybTm9MisDip4zA4%2BIaAisFVZ4Kllv%2FHpA500E%2BT8jvphfTwotrW1oFAtd1kmWMB9b50V9pXuXmlTm4qVzKRuos2vz1k0Laon6HDCeEiUxSnP%2BMGxl3aErvurTqsZwu3aerxKrBXQFjgGjf3rlUDki6%2Fuq30MO1DEZv1C2N7Up0cfC76vScXf21%2F1yBMMKGIsYAVlOPhzDskCFx%2FhZNCPfjSbmYhfu%2BcKXpUw8iFq%2F2ne4uyB0yp04F90HIkGIa7uxGeVXki811TF4aTM1ku%2B88MUcxEi3jI5J5i7xek%2BG6%2BXZ32wBh4B38rbAMD9ty1jqIpS6ajLdbKDtL%2FU0hznY1AppY6kcMlPJe9cS1rXZ2TBQQyk%2B2yyK0xqL75kiBpDOsF%2FZyp0b90C70jn9qCnQpM1Rt7KTZ2N1ujdPSgpSHx4BQnBm0qVOy19NMLFZlMcnc4tMVCwex81jNUws45IYiOZXjROG%2BpgwjDn1%2F7EBjqkAV7DyC6X4w2EOmdUfSLX5ubrGHvsZCVV%2BK1JwJ3ajrxobsR3YzTaqq8ijQsL0v1wzKC3BOzkISXJ%2BPSwWtmiBJ8e9JH%2BNKN%2B%2Fcy1gnTv051x4xmSCoO9gZizd2yUxQptTRAeIEoXgpiEHhdxWY41uGmu2p5R2HIeKsPCfZySFwxZB4UWV7xwSfF62Kj34B819ve1%2F6omesCuaMAmcqlKv90Nmkph&X-Amz-Signature=5eee8595ac392e49299e98ddc17de0ac2a51103f6d47e0630355bb2485a2e1b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REESVR7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCwLEfAoPo0hnGhsudmnk9LOLpWsEXi%2BeP7N3oqv0KWgwIhAKC95QcFRh%2FMav6KFLKwj%2B0K32PCLHuRNfj4%2FdWlnevLKv8DCGcQABoMNjM3NDIzMTgzODA1Igx8hwKnfq4rHsBlC90q3AMsrb%2FhtfjAsP%2BPjMRGUy3k5a7XGCSD9vhVbkXsTJHDrzZxKm0ZAKmLrvTWYz5IrC1HnKBr8LQi6QOBvTcbnD90H4VFiruVDX7jTfe1sKimCzdIbjx6ZPLm8FZypXMXbAPavSgta7%2BjNljlO7sq%2F7bo6C2VybTm9MisDip4zA4%2BIaAisFVZ4Kllv%2FHpA500E%2BT8jvphfTwotrW1oFAtd1kmWMB9b50V9pXuXmlTm4qVzKRuos2vz1k0Laon6HDCeEiUxSnP%2BMGxl3aErvurTqsZwu3aerxKrBXQFjgGjf3rlUDki6%2Fuq30MO1DEZv1C2N7Up0cfC76vScXf21%2F1yBMMKGIsYAVlOPhzDskCFx%2FhZNCPfjSbmYhfu%2BcKXpUw8iFq%2F2ne4uyB0yp04F90HIkGIa7uxGeVXki811TF4aTM1ku%2B88MUcxEi3jI5J5i7xek%2BG6%2BXZ32wBh4B38rbAMD9ty1jqIpS6ajLdbKDtL%2FU0hznY1AppY6kcMlPJe9cS1rXZ2TBQQyk%2B2yyK0xqL75kiBpDOsF%2FZyp0b90C70jn9qCnQpM1Rt7KTZ2N1ujdPSgpSHx4BQnBm0qVOy19NMLFZlMcnc4tMVCwex81jNUws45IYiOZXjROG%2BpgwjDn1%2F7EBjqkAV7DyC6X4w2EOmdUfSLX5ubrGHvsZCVV%2BK1JwJ3ajrxobsR3YzTaqq8ijQsL0v1wzKC3BOzkISXJ%2BPSwWtmiBJ8e9JH%2BNKN%2B%2Fcy1gnTv051x4xmSCoO9gZizd2yUxQptTRAeIEoXgpiEHhdxWY41uGmu2p5R2HIeKsPCfZySFwxZB4UWV7xwSfF62Kj34B819ve1%2F6omesCuaMAmcqlKv90Nmkph&X-Amz-Signature=ab309f2fbfd73fd65cd8f5cc3708b26f104174e152b411dc1fe91f0cf111c8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

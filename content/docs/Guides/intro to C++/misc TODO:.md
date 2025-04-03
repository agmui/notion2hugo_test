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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TICTSEMN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCAaDu%2F%2BUA1YqlS3bc1xnc%2F04ADKbXXYITK6Vv%2Fyqt2wAIhAIFoTb3Uk02utO4IKtJc7FGQkjlmuYgXkrSbrejZ%2BMr4KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOtt9B0CXttJ0AYB0q3AOQZJJnQAGO8psDWx%2BGTflfB51uvKJ4oF%2BKZXyQXaCFKJttQ1XuHPyuWpjwapfsIEmPM8qqzGa1B1MpO9wyDHDgC%2F6iwZx3m9zEfqGbAL3LWNnORN9ZmSzays0cLqa9weo2bXfpksHGIxdHgGocLT2X0GtrbMCLSQTMCiClvFr4Vv%2F20y15iGhdDEL89Wzqb66%2FdPzLfUhH7iCnRI2kBToOLyj54ic7F43mHw3BgGqKXXvYcFyZj%2Bx30nSR5zW0rh9VxAtVNT%2B%2F35ItMHxDK05qOnjICBm4NdkmRYNXbY0dvFqrtWObxb%2BfD1eDiQ6qqm724JE2tJwffsUbwsSJYCl%2B1AhP13vPD9cd%2FyRDN%2FSKND8nakNIV3s7gImh%2BvV17ToTrWnziUaFXNSilIQjRhGCwtdxUIAWQlSjr%2FCZcu4C6JiqFkf1Vjo2gc0vZwBxIpzOC3nfKlr%2BDGQIJA4xVoV6llwreGqbmMtNhW2Y%2FjlRLwMJ8abWpd5709Rt9y7sB1ojg3Pu0W%2Fpie0NzGnPlFyc6ongU1x7LJVJGIxC3OoP4hTkxWGvhV4NMGIUhOI456RxqyxxLD%2FRhqAMuqlizpVrxI4V7JTRKFyUVMoHVS%2BnQNqQyrcY6gsqlB6edTDdyri%2FBjqkAS0025sWFIjy3YkhOK0pbOBiEXkKUUU%2FsP0oP5%2BBgzdsh9RbTpCChIGngnO3Cytv5cO6wN7kNAVcbkexc8l5V%2FWZ5nQ%2Bul2IQp2n9iqN2pLG%2B1CFMR42r2577xls9011Dix54iHFLihYBlkI1NkVuOk71sU8WrFqqeV26kczdsY%2FUWlrFbTuxc3es9%2Bvq0TEZ%2BVzKcMGY3LBRNKPzsJmm9JzdWEG&X-Amz-Signature=8752cfacbb0f43191a59fb8879a7ffe6a8d3b303671476a627789e054c04651b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TICTSEMN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCAaDu%2F%2BUA1YqlS3bc1xnc%2F04ADKbXXYITK6Vv%2Fyqt2wAIhAIFoTb3Uk02utO4IKtJc7FGQkjlmuYgXkrSbrejZ%2BMr4KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOtt9B0CXttJ0AYB0q3AOQZJJnQAGO8psDWx%2BGTflfB51uvKJ4oF%2BKZXyQXaCFKJttQ1XuHPyuWpjwapfsIEmPM8qqzGa1B1MpO9wyDHDgC%2F6iwZx3m9zEfqGbAL3LWNnORN9ZmSzays0cLqa9weo2bXfpksHGIxdHgGocLT2X0GtrbMCLSQTMCiClvFr4Vv%2F20y15iGhdDEL89Wzqb66%2FdPzLfUhH7iCnRI2kBToOLyj54ic7F43mHw3BgGqKXXvYcFyZj%2Bx30nSR5zW0rh9VxAtVNT%2B%2F35ItMHxDK05qOnjICBm4NdkmRYNXbY0dvFqrtWObxb%2BfD1eDiQ6qqm724JE2tJwffsUbwsSJYCl%2B1AhP13vPD9cd%2FyRDN%2FSKND8nakNIV3s7gImh%2BvV17ToTrWnziUaFXNSilIQjRhGCwtdxUIAWQlSjr%2FCZcu4C6JiqFkf1Vjo2gc0vZwBxIpzOC3nfKlr%2BDGQIJA4xVoV6llwreGqbmMtNhW2Y%2FjlRLwMJ8abWpd5709Rt9y7sB1ojg3Pu0W%2Fpie0NzGnPlFyc6ongU1x7LJVJGIxC3OoP4hTkxWGvhV4NMGIUhOI456RxqyxxLD%2FRhqAMuqlizpVrxI4V7JTRKFyUVMoHVS%2BnQNqQyrcY6gsqlB6edTDdyri%2FBjqkAS0025sWFIjy3YkhOK0pbOBiEXkKUUU%2FsP0oP5%2BBgzdsh9RbTpCChIGngnO3Cytv5cO6wN7kNAVcbkexc8l5V%2FWZ5nQ%2Bul2IQp2n9iqN2pLG%2B1CFMR42r2577xls9011Dix54iHFLihYBlkI1NkVuOk71sU8WrFqqeV26kczdsY%2FUWlrFbTuxc3es9%2Bvq0TEZ%2BVzKcMGY3LBRNKPzsJmm9JzdWEG&X-Amz-Signature=821908d3778d77692779d995c27e60e4929b0700903edab08882f1a5dee46ba5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

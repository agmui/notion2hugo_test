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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZWAPCL%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQClnOv%2FU%2B0iQ4Hvz1dmiuZNlto6WJPBj5h75PO8osVD%2FgIhANRkC73Vs6pdrglI6w%2BTVwdxTmXVoRWEjn2yS97h55hwKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQqNcrKJsQvWnLUB0q3AOh9Lt1bWbGH1ayvP1f5iNfSzjcm93yZeie5q62crf5JTkgul4JZPurGge2WCLEoE5JFPoRaEEldAtwGByaCWmxlCOgqixBu4vEAkBSwbVI8jgpn5Qm724Cpg7WfyVQspNWBG6JxKZV5NbsoOFRoRaryKsq5qWG8OAmU4jk44GU%2BM7%2FMON3Z7CTF9Af3mCkR6pD14tHtI%2BV74q48XjY%2FHeABOGQGhOVPePr%2BUBcBpT2GG9TIYuAoWFev8r%2BLc6HfOE8KQTb%2B5TB%2B2WXHs2GtohayLNN6qfnkBfpnYTTcuotZluywYX7pWYPkXUvPToc3fb0wuYDtx5MBujGCYP9%2BhQPLRa6s1aIS%2FFy1XSb4Y6Gj%2Fhd4PQwctB3QTHVI3FiAFuT5FTBMyqoQBUQrWYVZrzU9xzoyluwuqvFrCSXcYEODmpCW%2FvONbL49e3m3KI9qLs8GfSP9vYyfnD2APpX%2FX1imSRv5Nlq1rfmNSRvp9uiNGTnRxLAF5qcpgHu7lnTvSg45t9EBf1wHehuVDkgm6iERxYuIqAiV3L7UKq5YrdDJz1MTtH7VxUqP%2FsohbkGdzr2PdAnxVnmlUHlzKg9D%2BsyYaqCLna9iWIRRoX8GguWZ%2FuNBXWF7syi9B3ZqTDsrfq%2BBjqkATQ1I4p3%2F7mcTZ4DS28C%2Fy0j9Y%2BVnIkf6zur2KFkwfpcBxL8XA28KMSlIuNYGcuR2vEi%2FIWYqT0UnsEHvq9EYBu39zAVqFvoLkWfeKMw5EPGTap6Mg4GZ987kCUDtijDXCsgrPAefwKDt5K%2F%2BvYlEP2yRDavjsXjADZxfqN%2Bg9RPSi1sZf8sq1N5pU1BPBj4yru1GA%2B%2BtKdWMb3Wj8aRDGfKPd5p&X-Amz-Signature=7d9a8d9ef1b0de129c118b46bb74ddaf857376e5e7e0e9080c45b24a9d6c066c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZWAPCL%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQClnOv%2FU%2B0iQ4Hvz1dmiuZNlto6WJPBj5h75PO8osVD%2FgIhANRkC73Vs6pdrglI6w%2BTVwdxTmXVoRWEjn2yS97h55hwKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQqNcrKJsQvWnLUB0q3AOh9Lt1bWbGH1ayvP1f5iNfSzjcm93yZeie5q62crf5JTkgul4JZPurGge2WCLEoE5JFPoRaEEldAtwGByaCWmxlCOgqixBu4vEAkBSwbVI8jgpn5Qm724Cpg7WfyVQspNWBG6JxKZV5NbsoOFRoRaryKsq5qWG8OAmU4jk44GU%2BM7%2FMON3Z7CTF9Af3mCkR6pD14tHtI%2BV74q48XjY%2FHeABOGQGhOVPePr%2BUBcBpT2GG9TIYuAoWFev8r%2BLc6HfOE8KQTb%2B5TB%2B2WXHs2GtohayLNN6qfnkBfpnYTTcuotZluywYX7pWYPkXUvPToc3fb0wuYDtx5MBujGCYP9%2BhQPLRa6s1aIS%2FFy1XSb4Y6Gj%2Fhd4PQwctB3QTHVI3FiAFuT5FTBMyqoQBUQrWYVZrzU9xzoyluwuqvFrCSXcYEODmpCW%2FvONbL49e3m3KI9qLs8GfSP9vYyfnD2APpX%2FX1imSRv5Nlq1rfmNSRvp9uiNGTnRxLAF5qcpgHu7lnTvSg45t9EBf1wHehuVDkgm6iERxYuIqAiV3L7UKq5YrdDJz1MTtH7VxUqP%2FsohbkGdzr2PdAnxVnmlUHlzKg9D%2BsyYaqCLna9iWIRRoX8GguWZ%2FuNBXWF7syi9B3ZqTDsrfq%2BBjqkATQ1I4p3%2F7mcTZ4DS28C%2Fy0j9Y%2BVnIkf6zur2KFkwfpcBxL8XA28KMSlIuNYGcuR2vEi%2FIWYqT0UnsEHvq9EYBu39zAVqFvoLkWfeKMw5EPGTap6Mg4GZ987kCUDtijDXCsgrPAefwKDt5K%2F%2BvYlEP2yRDavjsXjADZxfqN%2Bg9RPSi1sZf8sq1N5pU1BPBj4yru1GA%2B%2BtKdWMb3Wj8aRDGfKPd5p&X-Amz-Signature=dd125d487d6a1b14f7b8af001e52ada4bbc67fdddd8c2dcd082a2415369a0833&X-Amz-SignedHeaders=host&x-id=GetObject)

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
